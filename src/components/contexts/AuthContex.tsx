import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from "../../utils/firebase";
import firebase from 'firebase/app';



const AuthContext = React.createContext<any | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({ children }: { children: ReactNode }) {

    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);


    function registerUser(email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function loginUser(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
            setCurrentUser(firebaseUser);
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        registerUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}