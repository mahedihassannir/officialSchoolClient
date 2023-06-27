import { useRef } from "react";


const key = `0f4aa5e4abaf119c694fb653f9d54503`
// making upload photo in the photo storage 
const imgbbuploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${key}`  // making upload photo in the photo storage  ends



const Postinfo = () => {


    // img graping

    const imageRef = useRef(null)
    // img graping ends




    const file = imageRef.current.files[0]
    

    // pacate for image


    const imgdetailes = new FormData()

    imgdetailes.append('img', file)



    // handle the posting in the server 
    const handlePost = (e) => {
        e.preventDefault()

        const from = e.target

        // imgge upload related work 





        const title = from.title.value
        const description = from.description.value

        const infos = { title, description }
       


        fetch(imgbbuploadUrl, {
            method: "POST",
            body: imgdetailes
        })
            .then(res => res.json())
            .then(data => {
               
            })





    }

    return (
        <div className="w-full pb-20 flex justify-center items-center ">
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

export default Postinfo;