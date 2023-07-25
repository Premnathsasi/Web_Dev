import React, { useState } from "react";

const Register = () => {
    const [isLogin, setLogin] = useState(false)
  return (
    <section className={!isLogin ? "register" : "login"}>
      <div className={isLogin ? "login-mail" : "register-mail"}>
        <h1>{!isLogin ? "CREATE AN ACCOUNT" : "SIGN IN"}</h1>
          <form onSubmit={() => console.log('submit')}>
            {!isLogin && <input type="text" placeholder="First Name" />}
            {!isLogin && <input type="text" placeholder="Last Name" />}
            {!isLogin && <input  placeholder="Username" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">{!isLogin ? "CREATE": "SIGN IN"}</button>
          </form>
          {isLogin && <p>Don't have an Account? <span onClick={() => {setLogin(prev => !prev)}}>Sign Up</span></p>}
          {!isLogin && <p>Already have an Account? <span  onClick={() => {setLogin(prev => !prev)}}>Sign In</span></p>}
      </div>
    </section>
  );
};

export default Register;
