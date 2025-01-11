import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaHouseUser, FaAirFreshener, FaRegistered, FaSign, FaBars, FaTimes } from "react-icons/fa";
import { MdPermMedia, MdFastfood } from "react-icons/md";
import { useContext, useState } from "react";
import { ContexM } from "../Authentication/AuProvider";
import useCart from "../hooks/Usecart";

const Nav = () => {
    const { user, Logout } = useContext(ContexM);
    const [cart] = useCart();
    const [dark, SetDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const final = parseFloat(total).toFixed(2);

    const handleLogout = () => {
        Logout().catch(err => console.log(err));
    };

    return (
        <div>
            <nav className="flex justify-between items-center h-24 px-5 md:px-10 text-black">
                <Link to="/">
                    <h1 className="text-lg text-red-600 font-bold">
                        গ্রামীণ কম্পিউটার <span className="ml-2 text-[#340e8d]">সায়েন্স</span>
                    </h1>
                </Link>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <ul className={`md:flex gap-4 items-center ${menuOpen ? 'block' : 'hidden'} absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none`}>
                    <Link to="/" className="hover:text-[#db87f9]">Home</Link>
                    <Link to="/blogs" className="hover:text-[#db87f9]">Blog</Link>
                    <Link to="/registerinSchool" className="hover:text-[#db87f9]">Register in School</Link>
                    <Link to="/OurTeachers" className="hover:text-[#db87f9]">Our Teachers</Link>
                    <Link to="/courses" className="hover:text-[#db87f9]">Courses</Link>
                    <Link to="/myclass" className="hover:text-[#db87f9]">My Classes</Link>
                    <Link to="/courses" className="btn">Enroll Now</Link>

                    <button onClick={() => SetDark(!dark)} className="btn">
                        {dark ? "Dark" : "Light"}
                    </button>

                    <Link to="/cart" className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm absolute top-0 right-0">{cart.length || 0}</span>
                    </Link>

                    {user ? (
                        <button onClick={handleLogout} className="text-red-500 flex items-center gap-2">
                            <FaExternalLinkAlt /> Logout
                        </button>
                    ) : (
                        <Link to="/Login">Login</Link>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
