import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Course from "../../Pages/Course/Course";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch(`http://localhost:5000/courses`),
                element: <Home></Home>
            },

            {
                path: '/category/:id',
                clement: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
            },

            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])