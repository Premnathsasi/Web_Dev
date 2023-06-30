import React, { useContext, useState } from "react";
import classes from "./Search.module.css";
import { db } from "../../Firebase";
import { collection, query, where, getDoc,getDocs, setDoc, updateDoc, doc, serverTimestamp} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";

const Search = () => {
  const curCtx = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const handleSearch = async() => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {

      setErr(true)
    }

  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async() => {
    const combineId = curCtx.uid > user.uid ? curCtx.uid + user.uid : user.uid + curCtx.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if (!res.exists()){
        //create chat in chats collection
        await setDoc(doc(db, "chats", combineId),{messages: []});

        // create user 
        await updateDoc(doc(db, "userschats", curCtx.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userschats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: curCtx.uid,
            displayName: curCtx.displayName,
            photoURL: curCtx.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    }catch(err){
      console.log(err)
    }
    setUser(null)
    setUserName("")
    
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (<div className={classes.userChat} onClick={handleSelect}>
        <img
          className={classes.img}
          src={user.photoURL}
          alt="img"
        />
        <div className={classes.userChatInfo}>
          <span>{user.displayName}</span>
        </div>
      </div>)}
    </div>
  );
};

export default Search;
