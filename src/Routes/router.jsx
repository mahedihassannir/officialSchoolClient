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
import Detailes from "../Pages/Detailes";
import DashBoardManage from "../DashBoard/DashBoardManage";
import UserHome from "../DashBoard/UserHome/UserHome";
import Cart from "../Pages/Cart";
import FoodCheckout from "../Pages/FoodCheckout";






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
                    element: <Events></Events>,
                    loader: () => fetch(`http://localhost:5000/event`)
                },
                {
                    path: 'Social',
                    element: <Social></Social>
                },
                {
                    path: 'Food',
                    element: <Food></Food>,
                    loader: () => fetch(`http://localhost:5000/food`)
                },
                {
                    path: 'profile',
                    element: <Profile></Profile>
                },
                {
                    path: 'cDetailes',
                    element: <Detailes></Detailes>
                },
                {
                    path: 'cart',
                    element: <Cart></Cart>
                },

                // this route for teh food detailes page 
                {
                    path: '/FoodCheckout/:id',
                    element: <FoodCheckout></FoodCheckout>,
                    loader: ({ params }) => fetch(`http://localhost:5000/foodDeTailes/${params.id}`)//this route gose to teh food detailes
                },

                // this route for teh food detailes page ends 



            ]
        },
        {
            path: "Dashboard",
            element: <DashBoardManage></DashBoardManage>,
            children: [
                {
                    path: "",
                    element: <UserHome></UserHome>
                }
            ]


        }

    ]
)


export default router