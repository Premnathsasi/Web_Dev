import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  
  const curCtx = useContext(AuthContext)

  return (
    <div className={classes.navbar}>
        <span className={classes.logo}>Chat App</span>
        <div className={classes.user}>
            <img className={classes.img} src={curCtx.photoURL} alt='User' />
            <span>{curCtx.displayName}</span>
            <button onClick={() => {signOut(auth)}}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar