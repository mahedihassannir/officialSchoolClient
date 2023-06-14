

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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

    // logout user
    const Logout = () => {
        SetLoader(true)
        return signOut(auth)
    }
    // ends

    // here is the user observer 



    useEffect(() => {

        const off = onAuthStateChanged(auth, watch => {
            console.log(watch);
            Setuser(watch)
            // loader false to stop loading when the loaded done
            SetLoader(false)

            if (watch) {

                axios.post(`http://localhost:5000/jwt`, { email: watch.email })
                    .then(data => {
                        console.log("token", data.data.token);
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





    const userInfos = {
        user,
        creareUser,
        singinUser,
        Logout,
        loader,
    }


    return <ContexM.Provider value={userInfos}>

        {children}

    </ContexM.Provider>

};

export default AuProvider;