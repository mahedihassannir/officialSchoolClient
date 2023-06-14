import { Link } from "react-router-dom";

const Sidebar = () => {

    const admin = false

    return (
        <div className="w-[25%] bg-[#db87f0] h-screen ">
            <nav className="flex justify-center pt-10">
                <ul className="flex flex-col gap-2 ">
                    {admin ? <>

                        <Link className="text-lg " to="/Dashboard/userHoeme">Admin</Link>
                        <Link className="text-lg " >AdminBro</Link>
                        <Link className="text-lg " >Home</Link>

                    </>
                        :
                        <>
                            <Link className="text-lg " to="/Dashboard/userHoeme">User</Link>
                            <Link className="text-lg " to="/" >Home</Link>
                            <Link className="text-lg " >Home</Link>

                        </>
                    }

                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;