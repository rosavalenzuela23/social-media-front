import { createBrowserRouter } from "react-router-dom";
import App from "./home/home";
import Login from "./auth/login/login";
import Register from "./auth/register/register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
])

export default router;
