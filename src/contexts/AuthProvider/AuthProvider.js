import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User Changed", currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        googleSignIn,
        logOut,
        createUser,
        signIn
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;