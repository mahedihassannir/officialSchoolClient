import { Link } from "react-router-dom";

import { FaExternalLinkAlt, FaHouseUser, FaAirFreshener, FaRegistered, FaSign } from "react-icons/fa";
import { MdPermMedia, MdFastfood } from "react-icons/md";
import { useContext } from "react";

// contex form the authprovider
import { ContexM } from "../Authentication/AuProvider";
import useCart from "../hooks/Usecart";
// ends



const Nav = () => {
    // here is teh user form the user contex 
    const { user, Logout } = useContext(ContexM)
    // contex ends

    // cart form the usecart hook

    const [cart] = useCart()


    // ends

    console.log('cart', cart.length);

    const handleLogout = () => {
        Logout()
            .then(res => {
                const user = res.user
                console.log(user);

                // if()

            })
            .catch(err => {
                console.log(err);
            })
    }




    return (
        <div >

            <nav className=" text-black flex px-10  h-24 justify-between items-center ">
                {/* logos */}
                <Link to="/">
                    <h1 className="text-lg text-[#db87f0] font-bold">

                        রূপসদী বৃন্দাবন
                        <span className=" ml-2 link-accent text-[#340e8d]">
                            উচ্চ বিদ্যালয়
                        </span>
                    </h1>
                </Link>
                <ul className="flex gap-4 items-center">
                    <Link className="hover:text-[#340e8d]" >Home</Link>
                    <Link className="hover:text-[#340e8d] " >Blog</Link>
                    <Link className="hover:text-[#340e8d]" >Register in school</Link>
                    <Link className="hover:text-[#340e8d]" to='/OurTeachers'>OurTeachers</Link>
                    <Link className="hover:text-[#340e8d]" to="OurTeachers">Curses</Link>
                    <Link className="hover:text-[#340e8d]" to="OurTeachers">my classes</Link>
                    <Link className=" hover:text-[#340e8d] btn">enroll now</Link>



                    {/* here is the cart icon */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{cart.length || 0} Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <Link to="/cart" className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ends */}

                    {/* thsis is notify section */}
                    <div className=" cursor-pointer indicator ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="  h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {
                            cart ? < span className="badge badge-xs badge-primary  indicator-item"></span> :
                                <></>
                        }
                    </div>

                    {/* ends */}

                    {/* this is dropdown pofile */}

                    <div className="dropdown text-black dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                        </label>
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
                            <Link to="/Events">
                                <li><a className="flex items-center gap-2"> <FaAirFreshener></FaAirFreshener>Events</a></li>
                            </Link>

                            {/* dashboard */}
                            <Link to="/Dashboard">
                                <li><a className="flex items-center gap-2"> <FaAirFreshener></FaAirFreshener>DasHBoard</a></li>
                            </Link>
                            {/* emds */}

                            <Link to="/Social">

                                <li><a className="flex items-center gap-2"> <MdPermMedia></MdPermMedia> Social</a></li>
                            </Link>
                            <Link to="/Food">

                                <li><a className="flex items-center gap-2"> <MdFastfood></MdFastfood> Food</a></li>
                            </Link>

                            <Link to="/cart">

                                <li><a className="flex items-center gap-2"> <MdFastfood></MdFastfood> cart <span className="text-red-400">{cart?.length || +0} </span></a></li>
                            </Link>
                            <Link to="/">

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

                                        <li><a className="text-redy-500 flex items-center gap-2" onClick={handleLogout}><FaExternalLinkAlt></FaExternalLinkAlt> Logout</a></li>
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
                    </div>

                    {/* this is profile icon */}
                    {
                        user ?
                            <>
                                <Link to="/">

                                    <li><a className="text-redy-500 flex items-center gap-2"onClick={handleLogout}><FaExternalLinkAlt></FaExternalLinkAlt> Logout</a></li>
                                </Link>

                            </> :
                            <>
                                <Link to="/Login">Login</Link>
                            </>

                    }


                </ul>

            </nav>

        </div >
    );
};

export default Nav;