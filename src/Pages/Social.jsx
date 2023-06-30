
import { FaAirFreshener, FaHouseUser, FaRegistered, FaSign } from "react-icons/fa";
import Post from "../Components/SocialMediaCompos/Post";
import PostTedCardCompos from "../Components/SocialMediaCompos/PostTedCardCompos";

// css import form extracss 

import '../ExtraCss/socialCss.css'
import { Link } from "react-router-dom";
import { MdFastfood, MdPermMedia } from "react-icons/md";
import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";
import useCart from "../hooks/Usecart";

const Social = () => {

    const {user}=useContext(ContexM)

    const [cart]=useCart()


    return (
        <div className="w-full pb-20">

 
            <section className=" forLayouy pb-20">
                {/* here is the left section  */}
                <section>
                    {/* <div className="w-full h-20 bg-green-500">

                    </div> */}
                </section>

                {/* here is the left section  */}

                {/* ................................................... */}

                {/* main content */}
                <div className="w-11/12 mx-auto">

                    {/* post compo */}
                    <Post></Post>
                    {/* ends */}

                    {/* here is the post card section  */}
                    <PostTedCardCompos></PostTedCardCompos>
                    {/* here is the post card section ends  */}

                    {/* ................................................... */}


                </div>
                {/* content ends */}

                {/* here is teh right section  */}
                <section>
                    
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/profile'>
                                <li>
                                    <a className="justify-between flex items-center ">
                                        <FaHouseUser></FaHouseUser>Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                            </Link>
                            {/* end of profile link */}
                            <Link to="/events">
                                <li><a className="flex items-center gap-2"> <FaAirFreshener></FaAirFreshener>Events</a></li>
                            </Link>

                            {/* dashboard */}
                            <Link to="/Dashboard">
                                <li><a className="flex items-center gap-2"> <FaAirFreshener></FaAirFreshener>DasHBoard</a></li>
                            </Link>
                            {/* emds */}

                            <Link to="/social">

                                <li><a className="flex items-center gap-2"> <MdPermMedia></MdPermMedia> Social</a></li>
                            </Link>
                            <Link to="/Food">

                                <li><a className="flex items-center gap-2"> <MdFastfood></MdFastfood> Food</a></li>
                            </Link>

                            <Link to="/cart">

                                <li><a className="flex items-center gap-2"> <MdFastfood></MdFastfood> cart <span className="text-red-400">{cart?.length || +0} </span></a></li>
                            </Link>
                            <Link to="/registerinSchool">

                                <li><a className=""> <button className="flex items-center gap-2"><MdFastfood></MdFastfood> register in school</button></a></li>
                            </Link>


                            {

                                user ? <>



                                </>
                                    : <>


                                        <Link to="/Register">

                                            <li><a className="flex items-center gap-2"> <FaRegistered></FaRegistered> register</a></li>
                                        </Link>
                                    </>

                            }


                            {
                                user ? <>
                                    <Link to="/">

                                        {/* <li><a className="text-redy-500 flex items-center gap-2" onClick={handleLogout}><FaExternalLinkAlt></FaExternalLinkAlt> Logout</a></li>
                                         */}
                                    </Link>
                                </>
                                    :
                                    <>
                                        <Link to="/">

                                            <li><a className="text-redy-500 flex items-center gap-2"><FaSign></FaSign> Login</a></li>
                                        </Link>
                                    </>
                            }

                        </ul>

                </section>

                {/* here is teh right section  */}

                {/* ................................................... */}

            </section>
          

        </div>
    );
};

export default Social;