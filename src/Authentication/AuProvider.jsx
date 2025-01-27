

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from './firebase';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const auth = getAuth(app)

// contex makeed 
export const ContexM = createContext(null)
// ends

const AuProvider = ({ children }) => {

    const [user, Setuser] = useState(null)

    // loader 
    const [loader, SetLoader] = useState(true)
    // ends


    // user cretae
    const creareUser = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ends

    // login user
    const singinUser = (email, password) => {
        SetLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ends

    // login with google

    const provider = new GoogleAuthProvider()

    const loginwithpopup = () => {

        return signInWithPopup(auth, provider)

    }

    // logout user
    const Logout = () => {
        SetLoader(true)
        return signOut(auth)
    }
    // ends

    // here is the user observer 



    useEffect(() => {

        const off = onAuthStateChanged(auth, watch => {
            // console.log(watch);
            Setuser(watch)
            // loader false to stop loading when the loaded done

            SetLoader(false)


            if (watch) {

                axios.post(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/jwt`, { email: watch.email })
                    .then(data => {
                        // console.log("token", data.data.token);
                        localStorage.setItem("jwtToken", data.data.token)

                    })
            }
            else {
                localStorage.removeItem('jwtToken')
            }


        })
        return (() => {
            off
        })

    }, [])
    // ends


    // user profile update
    const UpdateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }


    const userInfos = {
        user,
        UpdateUser,
        creareUser,
        singinUser,
        Logout,
        loader,
        loginwithpopup
    }


    return <ContexM.Provider value={userInfos}>

        {children}

    </ContexM.Provider>

};

export default AuProvider;