import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";

// animation packeg
import Lottie from 'lottie-react'

import commingsoon from '../../public/newsectionaddloging/boylearn.json'


const Profile = () => {

    const { user } = useContext(ContexM)




    return (
        <div className="w-full h-screen">

            <p>{user.email}</p>
            <div>
                <Lottie animationData={commingsoon}/> 
            </div>




        </div>
    );
};

export default Profile;