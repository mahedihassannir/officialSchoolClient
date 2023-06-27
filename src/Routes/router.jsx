import {
    createBrowserRouter,

} from "react-router-dom";

// imports starts

import Main from "../Layout/Main";

import Home from "../Pages/Home";

import Login from "../Login/Login";

import Register from "../Login/Register";

import Blog from "../Pages/Blog";

import OurTeachers from "../Pages/OurTeachers";

import Mod from "../Pages/Mod";

import Events from "../Pages/Events";

import Social from "../Pages/Social";

import Food from "../Pages/Food";

import Profile from "../Pages/Profile";

import Detailes from "../Pages/Detailes";

import DashBoardManage from "../DashBoard/DashBoardManage";

import Cart from "../Pages/Cart";

import FoodCheckout from "../Pages/FoodCheckout";

import UserHone from "../DashBoard/UserPages/UserHone";

import AdminHome from "../DashBoard/Adminpages/AdminHome";

import AddBlogs from "../DashBoard/Adminpages/AddBlogs";

import ALLEvents from "../DashBoard/Adminpages/ALLEvents";

import AddTeachers from "../DashBoard/Adminpages/AddTeachers";

import Addevent from "../DashBoard/Adminpages/Addevent";


import ADDFood from "../DashBoard/Adminpages/ADDFood";

import ADDblog from "../DashBoard/Adminpages/ADDblog";

import ALLFood from "../DashBoard/Adminpages/ALLFood";

// import ALLFoods from "../DashBoard/Adminpages/ALLFoods";

import ALLTeachers from "../DashBoard/Adminpages/ALLTeachers";

import ALLUser from "../DashBoard/Adminpages/ALLUser";

import Books from "../DashBoard/UserPages/Books";

import Mycart from "../DashBoard/UserPages/Mycart";

import Qwiz from "../DashBoard/UserPages/Qwiz";

// import result from "../DashBoard/UserPages/Result";

import USerProfile from "../DashBoard/UserPages/USerProfile";
import PrivateRoute from "../Private/PrivateRoute";
import Marks from "../DashBoard/UserPages/Result";
import AnnountsMent from "../Pages/AnnountsMent";
import Postinfo from "../Components/SocialMediaCompos/Postinfo";
import DetailEvent from "../Pages/DetailEvent";
import RegisterInSchool from "../Pages/RegisterInSchool";
import MainHome from "../DashBoard/Adminpages/MainHome";

//ends of the routs import




const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <PrivateRoute>
                        <Home></Home>
                    </PrivateRoute>
                },

                {
                    path: 'Login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'Blog',
                    element: <PrivateRoute><Blog></Blog></PrivateRoute>
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
                    path: 'events',
                    element: <PrivateRoute>
                        <Events></Events>
                    </PrivateRoute>,
                    loader: () => fetch(`http://localhost:5000/event`)

                },
                {
                    path: 'social',
                    element: <PrivateRoute><Social></Social></PrivateRoute>
                },
                {
                    path: 'Food',
                    element: <Food></Food>,
                    loader: () => fetch(`http://localhost:5000/food`)
                },
                {
                    path: 'profile',
                    element: <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                },
                {
                    path: 'cDetailes',
                    element: <Detailes></Detailes>
                },
                {
                    path: 'cart',
                    element: <PrivateRoute><Cart></Cart></PrivateRoute>
                },
                {
                    path: 'notify',
                    element: <PrivateRoute><AnnountsMent></AnnountsMent></PrivateRoute>
                },

                {
                    path: 'postInfo',
                    element: <PrivateRoute><Postinfo></Postinfo></PrivateRoute>
                },
                {
                    path: '/events/:id',
                    element: <PrivateRoute><DetailEvent></DetailEvent></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/event/${params.id}`)
                },
                {
                    path: 'registerinSchool',
                    element: <PrivateRoute><RegisterInSchool></RegisterInSchool></PrivateRoute>,

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
        // here is teh dashboard route starts
        {
            path: "Dashboard",
            element: <PrivateRoute>

                <DashBoardManage></DashBoardManage>
            </PrivateRoute>,
            children: [
                // {
                //     path: "/",
                //     element: <MainHome></MainHome>
                // },

                {
                    path: "userHoeme",
                    element: <UserHone></UserHone>
                },

                {
                    path: "adminHome",
                    element: <AdminHome></AdminHome>
                },
                {
                    path: "AddBlogs",
                    element: <AddBlogs></AddBlogs>
                },
                {
                    path: "ALLEvents",
                    element: <ALLEvents></ALLEvents>
                },
                {
                    path: "AddBlogs",
                    element: <AddBlogs></AddBlogs>
                },
                {
                    path: "addTeachers",
                    element: <AddTeachers></AddTeachers>
                },
                {
                    path: "addevent",
                    element: <Addevent></Addevent>
                },
                {
                    path: "aDDFood",
                    element: <ADDFood></ADDFood>
                },
                {
                    path: "ADDblog",
                    element: <ADDblog></ADDblog>
                },
                {
                    path: "ALLFood",
                    element: <ALLFood></ALLFood>
                },
                {
                    path: "ALLTeachers",
                    element: <ALLTeachers></ALLTeachers>
                },
                {
                    path: "aLLUser",
                    element: <ALLUser></ALLUser>
                },
                {
                    path: "books",
                    element: <Books></Books>
                },
                {
                    path: "mycart",
                    element: <Mycart></Mycart>
                },
                {
                    path: "qwiz",
                    element: <Qwiz></Qwiz>
                },
                {
                    path: "result",
                    element: <Marks></Marks>
                },
                {
                    path: "sSerProfile",
                    element: <USerProfile></USerProfile>
                },


            ]


        }

    ]
)


export default router