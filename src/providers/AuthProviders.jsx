import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../utilities/firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // Google login
    const googleLogin  = () => {
        setLoading(true);
        return signInWithPopup(auth , provider);
    };

    // Create User
    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    };

    // Sign In
    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    };

    // Log Out
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    };

    // Auth Observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth , (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unSubscriber();
        };
    } , []);
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;