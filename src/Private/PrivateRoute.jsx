import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";
import { Navigate } from "react-router-dom";

// animation from lottiee react 

import Lottie from 'lottie-react'

import loaderanimation from '../../public/animationsForWebupdate/parpul.json'

const PrivateRoute = ({ children }) => {


    // loader from the contex
    const { user, loader } = useContext(ContexM)

    if (loader) {
        return <div className="w-full h-screen flex justify-between items-center">

            <Lottie className=" h-[400px] w-1/2 mx-auto" loop={true} animationData={loaderanimation} />

        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" replace={true}></Navigate>



};

export default PrivateRoute;