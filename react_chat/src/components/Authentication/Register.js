import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage, auth } from "../../Firebase";
import Spinner from "../Ui/Spinner";
import classes from "./style.module.css";
import Add from './man.png';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      setLoading(true)
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file).then(
        () => {
          getDownloadURL(storageRef).then( async(downloadURL) => {
            console.log(downloadURL )
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db,"userschats", res.user.uid), {});
            navigate('/')
          });
        }
      );
      console.log(uploadTask)

      // uploadTask.on(
      //   (error) => {
      //     setErr(true);
      //   },
      
      // );
    } catch (err) {
      setErr(true);
    }
    setLoading(false)
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <span className={classes.logo}>React Chat</span>
        <span className={classes.title}>Register</span>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="name" required />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="avatar" />
            <span>Add an avatar</span>
          </label>

          <button>{isLoading ? <Spinner /> : `Sign Up`}</button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>Already have an account? <Link to='/'>Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;
