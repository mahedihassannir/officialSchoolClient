import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContexM } from "../../Authentication/AuProvider";
import { MdAdminPanelSettings, MdEvent } from "react-icons/md";
import { FaChalkboardTeacher, FaGlassMartiniAlt, FaHome, FaNetworkWired, FaStoreAlt } from "react-icons/fa";

const Sidebar = () => {

    const admin = true

    // contex from teh conex

    const { user } = useContext(ContexM)

    return (
        <div className="w-[25%] px-2 text-white bg-[#3f064d]  h-screen ">

            <div className=" mt-10 flex items-center ml-2">
                <div>
                    <div className="avatar online">
                        <Link to="/profile">
                            <div className="w-24 border-4 border-[#340e8d] rounded-full">
                                <img className="w-24 rounded-full" src={user.photoURL} />
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


            <nav className="flex pl-16  pt-10">
                <ul className="flex flex-col gap-2 ">
                    {/*admin panel functionality   */}
                    {admin ? <>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/adminHome"> <MdAdminPanelSettings></MdAdminPanelSettings> Admin</Link>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/addevent"> <MdEvent></MdEvent> add
                            event</Link>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/addTeachers"> <FaChalkboardTeacher></FaChalkboardTeacher>add teachers</Link>


                        <Link className="text-lg flex items-center gap-2" to="/Dashboard/aDDFood"> <FaGlassMartiniAlt></FaGlassMartiniAlt>add Food</Link>

                        <hr />

                        <Link className="text-lg flex items-center gap-2 " to="/"> <FaHome></FaHome> Main Home</Link>

                        <Link className="text-lg flex items-center gap-2 " to="/Food"> <FaStoreAlt></FaStoreAlt>

                            Main                        food
                        </Link>

                        <Link className="text-lg flex items-center gap-2 " to="/OurTeachers"> <FaChalkboardTeacher></FaChalkboardTeacher>teachers</Link>


                        <Link className="text-lg flex items-center gap-2" to="/social"> <FaNetworkWired></FaNetworkWired>social</Link>




                    </>
                        :
                        <>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/userHoeme"> student Home</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Food">Food Store</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/result" >My result</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/Dashboard/books" >Books</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " ></Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to="/notify" >Announcment</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to='/' >Home</Link>
                            <Link className="text-lg hover:text-[#8d0e74] " to='/events' >events</Link>

                        </>
                    }

                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;