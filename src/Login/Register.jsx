import { useRef } from "react";

const Register = () => {

    const ImageRef = useRef(null)

    const uploadUrl = `https://api.imgbb.com/1/upload?key=ab19e4cb2cdbd9eef876755bbb698633`


    console.log(uploadUrl);

    const handleRegister = (e) => {
        e.preventDefault()

        const from = e.target

        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        console.log(name, email, password);


        const imageDetailes = ImageRef.current.files[0]
        console.log(imageDetailes);

        const packetOFImage = new FormData()
        packetOFImage.append("image", imageDetailes)

        fetch(uploadUrl, {
            method: "POST",
            body: packetOFImage
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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


                                <input ref={ImageRef} type="file" placeholder="Name" className=" opacity-60 cursor-pointer  input input-bordered mt-1 input-primary w-full max-w-xs" />

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