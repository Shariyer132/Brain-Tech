import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import ProductDashboard from "../Dashboard/ProductDashboard/ProductDashboard";
import Transactions from "../Dashboard/Transactions/Transactions";
import BuyedProducts from "../Dashboard/Transactions/BuyedProducts";
import ProductDetails from "../Dashboard/ProductDashboard/ProductDetails";
import CreateProduct from "../Dashboard/CreateProduct/CreateProduct";
import ManageUsers from "../Dashboard/ManageUsers/ManageUsers";
import SingleUser from "../Dashboard/ManageUsers/SingleUser";
import Dashboard from "../layouts/Dashboard";
import Shop from "../pages/Shop/Shop";
import ContactPage from "../pages/ContactPage/ContactPage";



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
            },
            {
                path: "/shop",
                element: <Shop/>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome/>
            },
            {
                path: 'productDashboard',
                element: <ProductDashboard/>
            },
            {
                path: 'transactions',
                element: <Transactions/>
            },
            {
                path: 'buyedProduct',
                element: <BuyedProducts/>
            },
            {
                path: 'productDetails',
                element: <ProductDetails/>
            },
            {
                path: 'createProduct',
                element: <CreateProduct/>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers/>
            },
            {
                path: 'user',
                element: <SingleUser/>
            }
        ]
    }
])