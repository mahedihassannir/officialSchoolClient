import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContexM } from "../../Authentication/AuProvider";
import { MdAdminPanelSettings, MdEvent } from "react-icons/md";
import { FaChalkboardTeacher, FaGlassMartiniAlt, FaHome, FaNetworkWired, FaStoreAlt, FaUser } from "react-icons/fa";
import IsAnmin from "../../hooks/IsAnmin";

const Sidebar = () => {
    

    const [isAdmin]=IsAnmin()

    // temp admin for checking

   
    // const isAdmin=true
    

    // contex from teh conex

    const { user } = useContext(ContexM)

    return (
        <div className="w-[25%] px-2 text-white bg-[#3f064d]  h-screen ">

            <div className=" mt-10 flex items-center ml-2">
                <div>
                    <div className="avatar online">
                        <Link to="/profile">
                            <div className="w-24 border-4 border-[#340e8d] rounded-full">
                                {
                                    user.photoURL ?
                                        < img className="w-24 rounded-full" src={user.photoURL} />
                                        :
                                        < img className="w-24 rounded-full" src="data:image/png;base64,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" alt="Avatar Tailwind CSS Component" />

                                }
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
                    {isAdmin     ? <>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/adminHome"> <MdAdminPanelSettings></MdAdminPanelSettings> Admin</Link>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/addevent"> <MdEvent></MdEvent> add
                            event</Link>

                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/addTeachers"> <FaChalkboardTeacher></FaChalkboardTeacher>add teachers</Link>
                        <Link className="text-lg flex items-center gap-2 " to="/Dashboard/aLLUser"> <FaUser></FaUser>all user</Link>


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