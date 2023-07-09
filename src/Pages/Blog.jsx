import { useEffect, useState } from "react";
// import { FaArrowAltCircleRight, FaHeart, FaHeartBroken, FaSave } from "react-icons/fa";
import IsAnmin from "../hooks/IsAnmin";


const Blog = () => {



    const [isAdmin] = IsAnmin()
    // const isAdmin=



    const [posts, SetPost] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => SetPost(data))


    }, [])

    // console.log(posts);

    // const [like, Setlike] = useState(false)

    return (
        <div className="grid grid-cols-2 gap-5 p-20">


            {
                posts.map(res => <section key={res._id}>


                    <div className="w-[600px] mx-auto border-2 rounded-lg pb-4">

                        <div className="flex items-center">
                            <div className="avatar mt-2 ml-2">
                                <div className="w-14 rounded-full">
                                    <img src={res.profilePhoto} alt="" />
                                </div>
                            </div>
                            {/* right side */}


                            <div className="pl-4">
                                <h5>{res.name}</h5>
                                <p>Follow</p>

                            </div>
                            {
                                isAdmin &&
                                <button className="ml-10 btn">
                                    delete
                                </button>
                            }

                        </div>
                        {/* content section  */}

                        <div className="w-full pb-2 px-2 pt-5 border-t-2 mt-5">
                            <h5 className="pb-2">{res.title}</h5>
                            <p>{res.description}</p>

                        </div>

                        {/* img sestion */}
                        <div>

                            <img className="w-full p-2 rounded-sm " src={res.img} alt="" />

                        </div>

                    </div>
                </section>
                )

            }




        </div >
    );
};

export default Blog;