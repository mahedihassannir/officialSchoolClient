import { useContext } from "react";

import { ContexM } from "../Authentication/AuProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


import '../ExtraCss/bg.css'


const Login = () => {

    // contex from teh auth provider
    const { singinUser, loginwithpopup } = useContext(ContexM)

    // this is teh navigating 
    const naviage = useNavigate()

    const handlePopupLogin = () => {

        loginwithpopup()
            .then(res => {
                const user = res.user

                naviage("/")
            })
            .catch(err => {
                console.log(err);
            })


    }



    const handleLogin = (e) => {
        e.preventDefault()

        const from = e.target

        // const name = from.name.value
        const email = from.email.value
        const password = from.password.value



        singinUser(email, password)
            .then(res => {
                const user = res.user


                if (user.email) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Login Successfully done`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }


                naviage("/")

            })
            .catch(err => {
                console.log(err);
            })



    }



    return (

        <div className="w-full  h-screen ">
            <div className="flex mt-10">
                {/* lesf side img */}
                <div className=" mr-2 w-[70%]">

                    <img className="h-[700px]" src="https://i.ibb.co/dJSssmN/login.jpg" alt="" />


                </div>
                {/* login from */}
                <form onSubmit={handleLogin} className="w-[400px] pt-20 border-2 h-[500px] rounde-sm">
                    <div className="">
                        <div className="-mt-10 ml-40">

                            <img className="w-28" src="https://i.ibb.co.com/hBrmsDg/123.png" alt="" />
                        </div>
                        <div className="ml-10">

                            <label htmlFor="">
                                <span>Email</span>
                            </label>
                            {/* inputs */}
                            <div>

                                <input name="email" type="email" placeholder="Email" className="  input input-bordered mt-1 input-primary w-full max-w-xs" />
                            </div>

                        </div>
                        {/* ends */}
                        <div className="ml-10">

                            <label htmlFor="">
                                <span>Password</span>
                            </label>
                            {/* inputs */}
                            <div>

                                <input name="password" type="password" placeholder="password" className="  input input-bordered mt-1 input-primary w-full max-w-xs" />
                            </div>

                        </div>
                        {/* li.nk to go out the register page */}
                        <div className="pl-10 py-2">
                            <Link className="link" to='/register'>New to this site</Link>
                        </div>

                        <div className="text-center ">
                            <button className="py-3 w-11/12 mx-auto hover:border-[#db87f0] hover:text-[#db87f0] 2 border-2 mt-4" type="submit">Login</button>
                        </div>
                        <div className="text-center mt-3">

                            <button className="btn " onClick={handlePopupLogin}>
                                google
                            </button>
                        </div>


                    </div>
                </form>

            </div >
        </div >


    );
};

export default Login;