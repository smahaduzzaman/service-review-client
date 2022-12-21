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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReview from "../../Pages/Reviews/MyReview";
import AddService from "../../Pages/Home/Services/AddService";
import Modal from "../../Pages/Home/Services/Modal";
import About from "../../Pages/About/About";
import Shop from "../../Pages/Shop/Shop";
import Pricing from "../../Pages/Pricing/Pricing";
import EditReview from "../../Pages/Reviews/EditReview";
import ViewAllButton from "../../Pages/Home/Home/ViewAllButton";
import MenuServices from "../../Pages/MenuServices/MenuServices";

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
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/services`)
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
            },
            {
                path: 'menuservices',
                element: <MenuServices></MenuServices>
            },
            {
                path: 'details',
                element: <Details></Details>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
            },
            {
                path: '/faqs',
                element: <Faqs></Faqs>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>,
            },
            {
                path: '/editreview',
                element: <EditReview></EditReview>,
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                // loader: () => fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/services`)
            },
            {
                path: '/modal/:id',
                element: <Modal></Modal>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/services/${params.id}`)

            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: 'viewallbutton',
                element: <ViewAllButton></ViewAllButton>
            }
        ]
    },
]);

export default router;