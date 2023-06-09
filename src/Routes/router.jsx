import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Blog from "../Pages/Blog";
import Teachers from "../Components/Teachers";
import OurTeachers from "../Pages/OurTeachers";
import Mod from "../Pages/Mod";
import Events from "../Pages/Events";
import Social from "../Pages/Social";
import Food from "../Pages/Food";
import Profile from "../Pages/Profile";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },

                {
                    path: 'Login',
                    element: <Login></Login>
                },
                {
                    path: 'Register',
                    element: <Register></Register>
                },
                {
                    path: 'Blog',
                    element: <Blog></Blog>
                },
                {
                    path: 'OurTeachers',
                    element: <OurTeachers></OurTeachers>
                },
                {
                    path: 'Mod',
                    element: <Mod></Mod>
                },
                {
                    path: 'Events',
                    element: <Events></Events>
                },
                {
                    path: 'Social',
                    element: <Social></Social>
                },
                {
                    path: 'Food',
                    element: <Food></Food>
                },
                {
                    path: 'profile',
                    element: <Profile></Profile>
                },

            ]
        }
    ]
)


export default router