import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../utilities/firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // Create User
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    };

    // Sign In
    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    };

    // Log Out
    const logOut = () => {
        return signOut(auth);
    };

    // Auth Observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth , (loggedUser) => {
            setUser(loggedUser);
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
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;