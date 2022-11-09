import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Details from "../../Pages/Details/Details";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Home/Services/Services";
import Faqs from "../../Pages/Faqs/Faqs";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp.";
import AllServices from "../../Pages/Home/Home/AllServices/AllServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'details',
                element: <Details></Details>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: 'allservices',
                element: <AllServices></AllServices>,
                loader: () => fetch(`http://localhost:5000/allservices`)
            },
            {
                path: '/faqs',
                element: <Faqs></Faqs>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            }
        ]
    },
]);

export default router;