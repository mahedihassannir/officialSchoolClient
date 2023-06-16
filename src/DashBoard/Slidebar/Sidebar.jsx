import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContexM } from "../../Authentication/AuProvider";

const Sidebar = () => {

    const admin = false

    // contex from teh conex

    const { user } = useContext(ContexM)

    return (
        <div className="w-[25%] text-white bg-[#3f064d]  h-screen ">

            <div className=" mt-10 flex items-center ml-2">
                <div>
                    <div className="avatar online">
                        <Link to="/profile">
                            <div className="w-24 border-4 border-[#340e8d] rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="ml-2">

                    {/* user or admin name */}
                    <h5 className="text-lg  ">{user.displayName || "Anonymas"}</h5>

                    {/* user or admin email */}
                    <p>{user.email}</p>


                </div>
            </div>


            <nav className="flex justify-center text-center pt-10">
                <ul className="flex flex-col gap-2 ">
                    {admin ? <>

                        <Link className="text-lg " to="/Dashboard/userHoeme">Admin</Link>
                        <Link className="text-lg " >AdminBro</Link>
                        <Link className="text-lg " >Home</Link>

                    </>
                        :
                        <>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/userHoeme">student Home</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Food">Food Store</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/result" >My result</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/books" >Books</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " ></Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/notify" >Announcment</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " >Home</Link>

                        </>
                    }

                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;