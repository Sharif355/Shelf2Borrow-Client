import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import Borrowed from "../Pages/Borrowed";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoutes>
            <AddBook></AddBook>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoutes>
            <AllBooks></AllBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoutes>
            <Borrowed></Borrowed>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
