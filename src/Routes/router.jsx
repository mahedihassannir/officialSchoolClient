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
import AdminOnly from "../Private/AdminOnly";
import AllBlogs from "../DashBoard/Adminpages/AllBlogs";
import Addannouncement from "../DashBoard/Adminpages/Addannouncement";
import AddBooks from "../DashBoard/Adminpages/AddBooks";
import Myclass from "../Pages/Courses/Myclass";
import Courses from "../Pages/Courses/Courses";
import ReadBooks from "../Pages/ReadBooks";
import HowUse from "../Video/HowUse";
import TeacherDetail from "../Pages/TeacherDetail";
import Addcourses from "../Pages/Courses/Addcourses";
import SingleDetaile from "../Pages/Courses/singleDetaile";
import Successfullpage from "../Components/paymentsuccessfullpage/Successfullpage";
import Paymentfail from "../Components/paymentsuccessfullpage/Paymentfail";


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

                // this is payment failed page

                {
                    path: 'payment/failed/:tranId',
                    element: <Paymentfail></Paymentfail>
                },

                // this is payment successfull page

                {
                    path: 'payment/success/:tranId',
                    element: <Successfullpage></Successfullpage>
                },
                {
                    path: "/detailes/:id",
                    element: <SingleDetaile></SingleDetaile>,
                    loader: ({ params }) => fetch(`http://localhost:5000/courseA/${params.id}`)
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
                    path: '/teacherDetail/:id',
                    element: <PrivateRoute><TeacherDetail></TeacherDetail></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/teacherDetail/${params.id}`)
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
                {
                    path: 'blogs',
                    element: <PrivateRoute><Blog></Blog></PrivateRoute>,

                },

                {
                    path: 'myclass',
                    element: <PrivateRoute><Myclass></Myclass></PrivateRoute>,

                },
                {
                    path: 'courses',
                    element: <PrivateRoute><Courses></Courses></PrivateRoute>,

                },
                {
                    path: 'howuse',
                    element: <PrivateRoute><HowUse></HowUse></PrivateRoute>,

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
                    element: <PrivateRoute><UserHone></UserHone></PrivateRoute>
                },

                {
                    path: "adminHome",
                    element: <AdminOnly><AdminHome></AdminHome></AdminOnly>
                },
                {
                    path: "AddBlogs",
                    element: <AdminOnly><AddBlogs></AddBlogs></AdminOnly>
                },
                {
                    path: "addBooks",
                    element: <AdminOnly><AddBooks></AddBooks></AdminOnly>
                },
                {
                    path: "addannouncement",
                    element: <AdminOnly><Addannouncement></Addannouncement></AdminOnly>
                },
                {
                    path: "ALLEvents",
                    element: <AdminOnly> <ALLEvents></ALLEvents></AdminOnly>
                },
                {
                    // aboied 
                    path: "addBlogs",
                    element: <AdminOnly> <AddBlogs></AddBlogs></AdminOnly>
                },
                {
                    path: "addTeachers",
                    element: <AdminOnly><AddTeachers></AddTeachers></AdminOnly>
                },
                {
                    path: "addevent",
                    element: <AdminOnly><Addevent></Addevent></AdminOnly>
                },
                {
                    path: "aDDFood",
                    element: <AdminOnly><ADDFood></ADDFood></AdminOnly>
                },
                {
                    path: "aDDcourse",
                    element: <AdminOnly><Addcourses></Addcourses></AdminOnly>
                },
                {
                    path: "ALLFood",
                    element: <AdminOnly><ALLFood></ALLFood></AdminOnly>
                },

                {
                    path: "ALLblogs",
                    element: <AdminOnly> <AllBlogs></AllBlogs></AdminOnly>
                },

                {
                    path: "aLLTeachers",
                    element: <AdminOnly><ALLTeachers></ALLTeachers></AdminOnly>
                },
                {
                    path: "aLLUser",
                    element: <AdminOnly><ALLUser></ALLUser></AdminOnly>
                },
                {
                    path: "books",
                    element: <Books></Books>
                },
                {
                    path: "booksRead/:id",
                    element: <PrivateRoute><ReadBooks></ReadBooks></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/redbook/${params.id}`)
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