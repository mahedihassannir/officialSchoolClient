// css
import Swal from 'sweetalert2';
import '../../ExtraCss/bg.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import { useContext } from "react";
import { ContexM } from "../../Authentication/AuProvider";



const key = `890b5ec0923fcc8472f7e690406adc40`
// making upload photo in the photo storage 
const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`


const AddBlogs = () => {

    const { user } = useContext(ContexM)

    const navigate = useNavigate()

    // img graping

    const imageRef = useRef(null)
    // img graping ends






    // handle the posting in the server 
    const handlePost = (e) => {
        e.preventDefault()

        const from = e.target
        const title = from.title.value
        const description = from.description.value

        // pacate for image

        const file = imageRef.current.files[0]


        const Imagedaat = new FormData()

        Imagedaat.append('image', file)



        fetch(uploadUrl, {
            method: "POST",
            body: Imagedaat
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                fetch('http://localhost:5000/blogpost', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ title, description, img: data?.data?.display_url, email: user.email, name: user.displayName, profilePhoto: user.photoURL })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.insertedId) {

                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your blog has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })


                        }
                        // navigate("   ")
                    })


            })





    }








    return (
        <div className="w-full flex justify-center  mt-10 ">


            <form onSubmit={handlePost} className="w-1/2 mx-auto">
                <div>
                    <input name="title" type="text" className=" pl-2 border-2  w-11/12 py-3 rounded-md " placeholder="Title" />
                </div>

                {/* image upload */}
                <div className="mt-4">
                    <input type="file" ref={imageRef} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />

                </div>
                {/* ends */}

                <div className="mt-2">
                    <textarea className=" text-lg text-gray-400 border-2 pl-2 pt-4 rounded-md border-[#db87f0]" name="description" id="" cols="90" rows="10" placeholder="Description"></textarea>
                </div>


                <div className="text-center">
                    <button type="submit" className="py-3 px-6 rounded-lg bg-purple-500 text-white font-bold">
                        Post
                    </button>
                </div>

            </form>


        </div>
    );

};

export default AddBlogs;