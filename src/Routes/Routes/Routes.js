import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Course from "../../Pages/Course/Course";
import Tutorial from "../../Pages/Tutorial/Tutorial";
import Blog from "../../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../../Pages/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses";
import Sidebar from "../../Pages/Shared/Sidebar/Sidebar";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        ErrorPage: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '/courses/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/tutorial',
                element: <PrivateRoute><Tutorial></Tutorial></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/courses`)

            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
        ]
    }
]);