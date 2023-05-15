import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage//ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
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
    ],
  },
]);

export default router;
