import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import ContactPage from "../components/ContactPage/ContactPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <ContactPage/>
            }
        ]
    }
])