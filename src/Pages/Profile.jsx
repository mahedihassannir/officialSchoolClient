import { useContext, useEffect, useState } from "react";
import { ContexM } from "../Authentication/AuProvider";

// animation packeg
// import Lottie from 'lottie-react'

// import commingsoon from '../../public/newsectionaddloging/boylearn.json'

//css from extracss event 
import '../ExtraCss/event.css'
import usePost from "../hooks/Usepost";

const Profile = () => {

    const { user } = useContext(ContexM)

    {/* <div>
                <Lottie animationData={commingsoon}/> 
            </div> */}


    // fetching

    // const [posts, SetPost] = useState([])


    // useEffect(() => {

    //     fetch(`http://localhost:5000/personPost/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => SetPost(data))


    // }, [user.email])

    // console.log(posts.length);

    const [post] = usePost()

    console.log(post.length);

    return (
        <div className="w-full ">

            {/* profile */}
            <div className="">
                <div className=" py-2 sticky pl-2 ">
                    {/* profile */}
                    <div className="">

                        {/* profile banner */}
                        <div className="profileBanner ">


                        </div>
                        {/* profile img */}
                        <div className="-mt-16 ml-10">

                            <img className="w-[140px] bg-cover object-cover object-center  border-2 hover:border-3 hover:border-[#db87f0] h-[140px] rounded-full" src={user.photoURL} alt="" />

                        </div>

                    </div>



                    {/*  */}

                </div>

                <div className="profile">
                    <div className=" pl-2 pt-2 border-2 h-[500px] rounded-md  mt-5">
                        <div className="">

                            <div className="flex gap-3 items-center">
                                <img className="w-[40] border-2  hover:border-[#db87f0] h-[40px] rounded
                                " src={user?.photoURL} alt="" />
                                {/* name */}
                                <h4 className="text-lg font-bold">Namme : {user.displayName} </h4>
                            </div>
                            <div className="pt-3">
                                <p className="text-lg font-semibold">email: {user.email}</p>
                            </div>

                            <div className="text-lg">
                                <div className="font-semibold pt-2">Add bio</div>
                                <div className="font-semibold pt-2">About Your self</div>
                                <div className="font-semibold pt-2">Hobis</div>
                            </div>
                        </div>

                    </div>



                    {/* content section of the profile section */}

                    <div className="mb-20  my-2">
                        {/* hedding */}
                        <div className="">

                            <h1 className="text-center mb-5 text-[#3b1445] text-lg">Your Posts {post.length}</h1>

                        </div>
                        {/*ends */}

                        {/*  */}


                        {/* content */}

                        {/* <div className="w-4/5 bg-red-400 h-20 mx-auto"> */}
                        {
                            post.map(res => <div className="mb-2" key={res._id}>


                                <section>

                                    <div className="w-[600px]  mx-auto border-2 rounded-lg pb-4">

                                        <div className="flex items-center">
                                            <div className="avatar mt-2 ml-2">
                                                <div className="w-14 rounded-full">
                                                    <img src={res.profilePhoto} alt="" />
                                                </div>
                                            </div>
                                            {/* right side */}
                                            <div className="pl-4">
                                                <h5>{res.name}</h5>
                                                <p>{res.email}</p>

                                            </div>
                                        </div>
                                        {/* content section  */}

                                        <div className="w-full pb-2 px-2 pt-5 border-t-2 mt-5">
                                            <h5 className="pb-2">{res.title}</h5>
                                            <p>{res.description}</p>

                                        </div>

                                        {/* img sestion */}
                                        <div>
                                            <img src={res.img
                                            } alt="" />

                                        </div>

                                        <div className="py-10  mt-2 ">

                                        </div>
                                    </div>


                                </section>
                            </div>)
                        }
                        {/* </div> */}


                    </div>

                </div>
            </div>






        </div>
    );
};

export default Profile;