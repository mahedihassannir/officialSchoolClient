

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

    // user cretae
    const creareUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ends

    // login user
    const singinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ends

    // logout user
    const Logout = () => {
        return signOut(auth)
    }
    // ends

    // here is the user observer 



    useEffect(() => {

        const off = onAuthStateChanged(auth, watch => {
            console.log(watch);
            Setuser(watch)

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
    }


    return <ContexM.Provider value={userInfos}>

        {children}

    </ContexM.Provider>

};

export default AuProvider;