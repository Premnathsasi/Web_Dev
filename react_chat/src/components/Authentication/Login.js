import React, { useRef, useState } from 'react';
import classes from'./style.module.css';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [err, setErr] = useState(false);
    const mailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();
    const handleSignIn = async(e) => {
        e.preventDefault()
        const email = mailInput.current.value
        const password = passwordInput.current.value
        try {
            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                navigate('home')
    
              })
        } catch(err){
            console.log(err)
            setErr(true)
        }
       
          
        
    };
    return (
        <div className={classes.formContainer}>
            <div className={classes.formWrapper}>
                <span className={classes.logo}>React Chat</span>
                <span className={classes.title}>Sign in</span>
                <form onSubmit={handleSignIn}>
                    <input type='email' placeholder='email' ref={mailInput}/>
                    <input type='password' placeholder='password' ref={passwordInput}/>
                    <button type='submit'>Sign in</button>
                    {err && <span>Something went wrong...</span>}

                </form>
                <p>Don't have an account? <Link to='register'>Sign up</Link></p>
            </div>
        </div>
        )
};

export default Login;