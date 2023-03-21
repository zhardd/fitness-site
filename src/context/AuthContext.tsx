import {createContext, useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         getAuth, UserCredential
} from "firebase/auth";
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext<any | null>(null);
export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = (props: any) => {
const {children} = props;
const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true);

function signup (email: any, password: any) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function signin (email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password)
}

function logout () {
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
        setCurrentUser(user);
        setLoading(false);
    });

    return unsubscribe
  }, []);

// const [user, setUser] = useState<firebase.User | null>(null);


const value = {
    currentUser,
    signup,
    signin,
    logout
  }

// const navigate = useNavigate();
// useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
//         if(firebaseUser) {
//             setUser(firebaseUser);
//         } else 
//         {
//             navigate('/fitness-site/signin');
//         }
//     });

//     return unsubscribe;
//   }, []);

//     const createUser = (email: any, password: any) => {
//      createUserWithEmailAndPassword(auth, email, password).then((res: any) => {
//         return res.user
//     }).catch((err) => {
//         console.log(err);
//     });
//  };




    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}