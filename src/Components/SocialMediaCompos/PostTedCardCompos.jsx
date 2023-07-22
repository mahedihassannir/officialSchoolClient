import { useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContexM } from "../../Authentication/AuProvider";
import IsAnmin from "../../hooks/IsAnmin";
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaChartBar, FaComment, FaFunnelDollar, FaHardHat, FaHeart, FaHeartBroken, FaLowVision, FaSave, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PostTedCardCompos = () => {

    const [isAdmin] = IsAnmin()
    // const isAdmin=

    // user 
    const { user } = useContext(ContexM)


    const [posts, SetPost] = useState([])


    useEffect(() => {

        fetch('https://server-nine-ecru.vercel.app/allpost')
            .then(res => res.json())
            .then(data => SetPost(data))


    }, [])

    // console.log(posts);

    const [like, Setlike] = useState(false)

    const userimg = user.displayURL



    console.log(userimg);
    const handleSavePost = (e) => {

        e.preventDefault()

        const comment = e.target.comment.value



        fetch(`https://server-nine-ecru.vercel.app/comment`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                comment, authoemail: user.email, Userimg: user.photoURL, name: user.displayName
            })
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `comment done`,
                        showConfirmButton: false,
                        timer: 300
                    })

                }


            })



    }

    return (
        <div className="grid gap-4">


            {
                posts.map(res => <section key={res._id}>


                    <form onSubmit={handleSavePost} className="w-  mx-auto border-2 rounded-lg pb-4">

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

                        <div className=" ml-2 mt-2 ">

                            <div className="flex items-center">
                                <div onClick={() => Setlike(!like)} className="">
                                    {

                                        like ?
                                            <FaHeart onClick={() => Setlike(!like)} className="text-red-400 text-2xl ml-4"></FaHeart>
                                            :

                                            <FaHeartBroken className=" text-2xl ml-4"></FaHeartBroken>
                                    }

                                </div>

                                {/* other section */}

                                {/* comment section */}
                                <div className="flex justify-center items-center ml-20">

                                    <input  name="comment" type="text" placeholder="comment" className="input input-bordered w-[320px]" />

                                    <button type="submit" className="text-2xl -ml-8">
                                        {/* <input className=" -ml-8" name="comment" type="button" value="comment" /> */}
                                        <abbr title="comment">

                                            <FaArrowAltCircleRight className="text-2xl"></FaArrowAltCircleRight>

                                        </abbr>
                                    </button>
                                </div>

                                {/* ends of comment */}

                                {/* save btn */}
                                <div className="ml-10 ">
                                    <Link to="/">
                                        <p className="text-2xl flex"> <abbr title="show all comments">
                                            <FaComment ></FaComment>

                                        </abbr>
                                            <span className="text-sm ml-1">show all comments</span>

                                        </p>

                                    </Link>

                                </div>
                            </div>




                        </div>
                    </form>
                </section>
                )

            }




        </div >
    );
};

export default PostTedCardCompos;