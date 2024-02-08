import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import AllToy from "../../pages/Home/AllToy/AllToy";
import SubMainLayout from "../../Layout/SubMainLayout";



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
            }
        ]
    }
]);

export default router;