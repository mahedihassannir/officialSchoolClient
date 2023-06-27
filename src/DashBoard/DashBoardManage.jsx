import { Outlet } from "react-router-dom";
import Sidebar from "./Slidebar/Sidebar";

const DashBoardManage = () => {
    return (
        <div className="flex bg-white w-full ">

            <Sidebar></Sidebar>

            <Outlet></Outlet>



        </div>
    );
};

export default DashBoardManage;