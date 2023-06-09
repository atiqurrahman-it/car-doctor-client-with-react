import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage//ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUP/SingUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sing-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "/check-out/:id",
        element:<PrivateRoute><CheckOut></CheckOut> </PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings> </PrivateRoute>,
      }
    ],
  },
]);

export default router;
