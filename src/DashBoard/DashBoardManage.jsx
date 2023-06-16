import { Outlet } from "react-router-dom";
import Sidebar from "./Slidebar/Sidebar";

const DashBoardManage = () => {
    return (
        <div className="flex bg-black  w-full ">

            <Sidebar></Sidebar>

            <Outlet></Outlet>



        </div>
    );
};

export default DashBoardManage;