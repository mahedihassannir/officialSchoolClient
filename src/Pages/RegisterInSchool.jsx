// animation packeg
import Lottie from 'lottie-react'
import commingsoon from '../../public/newsectionaddloging/boylearn.json'


const RegisterInSchool = () => {
    return (
        <div className="w-full h-screen py-2">


            <div>

                {/* animation for new comming soon */}
                <div>
                    <Lottie animationData={commingsoon} />
                </div>

            </div>


        </div>
    );
};

export default RegisterInSchool;