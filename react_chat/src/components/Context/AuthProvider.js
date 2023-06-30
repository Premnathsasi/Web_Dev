import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

const AuthProvider = ({children}) => {
    const [curUser, setCurUser] = useState();

    useEffect(() => {
       const unsub = onAuthStateChanged(auth, (user) => {
            setCurUser(user)
        });

        return () => {
            unsub()
        }
    },[])
    return (
        <AuthContext.Provider value={curUser}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;