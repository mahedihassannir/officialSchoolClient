import { useRef } from "react";
import { ContexM } from "../Authentication/AuProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";

const Register = () => {

    // here is the contex provider create contex 

    const { creareUser, UpdateUser } = useContext(ContexM)


    const ImageRef = useRef(null)

    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`



    // navigating 
    const naviage = useNavigate()
    // ends

    const handleRegister = (e) => {
        e.preventDefault()

        const from = e.target

        const name = from.name.value
        const email = from.email.value
        const password = from.password.value

      
        const file = ImageRef.current.files[0]
        

        const Imagedaat = new FormData()

        Imagedaat.append('image', file)

        fetch(uploadUrl, {
            method: "POST",
            body: Imagedaat
        })
            .then(res => res.json())
            .then(data => {

                const image = data.data.display_url


               


                creareUser(email, password)
                    .then(res => {
                        const user = res.user

                        console.log(user.displayName);
                        

                        const userinfo = { name: name, email: user.email, photo: data.data.display_url, password: password, id: user._id, emailVerified: user.emailVerified, anonimus: user.isAnonymous, }


                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `account create successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                        console.log(user, "line 72");

                        UpdateUser(name, image)
                            .then(() => {
                                console.log("user profile Updated");
                            })
                            .catch(err => {
                                console.log(err);
                            })







                        fetch(`http://localhost:5000/users`, {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(userinfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log("db info", data);
                            })


                        naviage("/")
                    })
                    .catch(err => {
                        console.log(err);
                    })



            })


    }

    return (
        <div className="w-full h-screen ">
            <div className="flex mt-10">
                {/* lesf side img */}
                <div className=" mr-2 w-[70%]">

                </div>
                {/* login from */}
                <form onSubmit={handleRegister} className="w-[400px] pt-20 border-2 h-[500px]">
                    <div className="">
                        <div className="ml-10">

                            <label htmlFor="">
                                <span>Name</span>
                            </label>
                            {/* inputs */}
                            <div>

                                <input name="name" type="text" placeholder="Name" className="  input input-bordered mt-1 input-primary w-full max-w-xs" />
                            </div>

                        </div>
                        {/* ends */}

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
                        {/* ends */}
                        <div className="ml-10">

                            <label htmlFor="">
                                <span>image</span>
                            </label>
                            {/* inputs */}
                            <div>


                                <input required ref={ImageRef} type="file" placeholder="Name" className=" opacity-60 cursor-pointer  input input-bordered mt-1 input-primary w-full max-w-xs" />

                            </div>

                        </div>
                        {/* ends */}
                        <div className="text-center ">
                            <button className="py-3 w-11/12 mx-auto hover:border-[#db87f0] hover:text-[#db87f0] 2 border-2 mt-4" type="submit">Register</button>
                        </div>


                    </div>
                </form>

            </div>
        </div>


    );
};

export default Register;