import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {


    // loader from the contex
    const { user, loader } = useContext(ContexM)

    if (loader) {
        return <h1>mahedi............mhaedui...........</h1>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" replace={true}></Navigate>



};

export default PrivateRoute;