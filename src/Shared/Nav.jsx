import { Link } from "react-router-dom";

import { FaExternalLinkAlt, FaHouseUser, FaAirFreshener, FaRegistered, FaSign } from "react-icons/fa";
import { MdPermMedia, MdFastfood } from "react-icons/md";
import { useContext } from "react";

// contex form the authprovider
import { ContexM } from "../Authentication/AuProvider";
import useCart from "../hooks/Usecart";
import { useState } from "react";
// ends



const Nav = () => {
    // here is teh user form the user contex 
    const { user, Logout } = useContext(ContexM)
    // contex ends

    // cart form the usecart hook

    const [cart] = useCart()


    // ends



    const handleLogout = () => {
        Logout()
            .then(res => {
                const user = res.user


                // if()

            })
            .catch(err => {
                console.log(err);
            })
    }

    const [dark, SetDark] = useState(true)

    // const darkmode = document.getElementById("dakmmode")


    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const final = parseFloat(total).toFixed(2)


    return (
        <div className="">

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
                    <Link className="hover:text-[#db87f9] hover:shadow" >Home</Link>
                    <Link className="hover:text-[#db87f9] hover:shadow " to="/blogs" >Blog</Link>
                    <Link className="hover:text-[#db87f9] hover:shadow" to="/registerinSchool" >Register in school</Link>
                    <Link className="hover:text-[#db87f9] hover:shadow" to='/OurTeachers'>OurTeachers</Link>
                    <Link className="hover:text-[#db87f9] hover:shadow" to="/courses">Courses</Link>
                    <Link className="hover:text-[#db87f9] hover:shadow" to="/myclass">my classes</Link>
                    <Link className="hover:text-[#db87f0] btn" to="/courses">enroll now</Link>

                    <button onClick={() => SetDark(!dark)} className="btn">
                        {
                            dark ? "dark" : "light"
                        }
                    </button>

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
                                    <span className="font-bold text-lg">{cart.length || 0} টি পণ্য</span>
                                    <span className="text-red-600 text-lg">মোট: ${final} টাকা</span>
                                    <Link to="/cart" className="card-actions ">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                        <p className="text-center">কার্ট দেখুন</p>
                                        {/* <button className="btn btn-primary btn-block opacity-0 hover:opacity-100">কার্ট দেখুন</button>
                                         */}
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ends */}

                    {/* thsis is notify section */}
                    <Link to="/notify">
                        <div className=" cursor-pointer indicator ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="  h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            {
                                cart ? < span className="badge badge-xs badge-primary  indicator-item"></span> :
                                    <></>
                            }
                        </div>
                    </Link>

                    {/* ends */}

                    {/* this is dropdown pofile */}

                    <div className="dropdown text-black dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full animate-pulse">
                                {/* profile img */}

                                {
                                    user ?
                                        <img src={user?.photoURL} alt="" />
                                        :
                                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHAwQCAf/EADYQAAICAQICBgcGBwAAAAAAAAABAgMEBREGMRIhQVFxkRMUYYGhsdEiIzJCUnIVJENiY3PB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDUgAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjdR1zT9Pk4X3dK1f0610pLx7iM4r12WJ/JYU9r2vvJrnWu5e1/ApTbbbb3b7SlXVcZYTls8bIUe/aPy3JjTtWwdS6sS5Oa51y6pL3GYn1XZOucZ1ylCcXvGUXs0wVrIIPhnWv4nQ6b2vWqlvL+9fq+pOEAAAAAAAAAAAAAAOeRdHHx7bp/hrg5P3HQjuId/wCCZu3P0TAzm+6eRfZda97LJOUn7WcwC4gACj16TmSwdRoyItpRmul7YvqfwbNQ6ux7+0yR8jVsXf1Wnfn6OO/kZV1AAAAAAAAAAAAADz59HrWDkULnZXKK8dj0ADJPFbPuBYOK9Hnh5c8ymO+Na93suquXbv7G+RXygAAOuNTLIyaqYLeVk1Be97GqpKMVFcktkVDg7R5+lWo5EXGKX3Ca5v8AV4dxcCAAAAAAAAAAAAAAAH42lz5AJRjOLjOKlFrZxa3TRA5nCenZEulU7cdvsracfJnXUOJtOw24RnK+xdlS3XnyIW/jPJk36vi0wXfNuT/4B6VwXXv15s9v9a+pIYHC+nYcoznGeRNPnc015JbFfXF+p779HG27vRv6npx+M7k16zh1yXa65NPye4KuQIrTuINOz2oQt9FY/wAlq6Pk+TJUAAAAAAAAAAAAB8W2QqqnZZJRhCLlJvsSA5Z2bRgY0sjJn0YR82+5LvKFrOvZWqSlBN043ZVF8/3PtOWu6tZq2Y7HvGiD2qg+xd/iyOKAACAAKD61sT2h8SX4Eo1ZTlfjcuv8UPDv8CBBFavRfVk0wuomp1zW8ZLtOhn3DOtPTclU3Sfqtr+0n+R/q+poJAAAAAAAAAKvxvnuvHqwK5bO37dn7VyXvfyLQZvxJkes63lS33UJ+ij4R6vnuBGAA0gAAAAAAAB7C/cIag8zTFVZLe3HfQfe49j+a9xQSe4LyHVrCp36r4OPvXWvkyKvoAIAAAAAAuZlGTJzybpPnKyT+J+gGuQANIAAAAAAAAEhw/Loa5gv/Kl59QAGlgAyoAAP/9k=" alt="" />
                                }

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
                            {/* <Link to="/bookss">

                                <li><a className=""> <button className="flex items-center gap-2"><MdFastfood></MdFastfood> Free Books</button></a></li>
                            </Link> */}


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

                                    <li><a className="text-redy-500 flex items-center gap-2" onClick={handleLogout}><FaExternalLinkAlt></FaExternalLinkAlt> Logout</a></li>
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