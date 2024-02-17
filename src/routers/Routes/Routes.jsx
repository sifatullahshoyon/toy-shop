import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import AllToy from "../../pages/Home/AllToy/AllToy";
import SubMainLayout from "../../Layout/SubMainLayout";
import Registration from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";
import Blog from "../../pages/Home/Blog/Blog";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import AddAToy from "../../pages/Home/AddAToy/AddAToy";
import MyToys from "../../pages/Home/MyToys/MyToys";
import UpdatedToy from "../../pages/UpdatedToy/UpdatedToy";



const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/',
                element : <Home />
            },
           
        ]
    },
    {
        path : '/',
        element : <SubMainLayout />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/all-toy',
                element : <AllToy />
            },
            {
                path : '/registration',
                element : <Registration />
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/blog',
                element : <Blog />
            },
            {
                path : '/details/:id',
                element : <ViewDetails />,
                loader : ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path : '/add-a-toy',
                element : <AddAToy />
            },
            {
                path : '/my-toy',
                element : <MyToys />
            },
            {
                path : '/updatedToy/:id',
                element : <UpdatedToy />
            }
        ]
    }
]);

export default router;