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
import Books from "../Pages/Home/Books";
import BooksDetails from "../Pages/Home/BooksDetails";
import UpdateBooks from "../Pages/UpdateBooks";

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
        path: "/categories/:category",
        element: (
          <PrivateRoutes>
            <Books></Books>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `      https://library-management-server-k3pz7vyws-sharif355.vercel.app/categories/${params.category}`
          ),
      },
      {
        path: "/books/:id",
        element: <BooksDetails></BooksDetails>,
        loader: ({ params }) =>
          fetch(
            `      https://library-management-server-k3pz7vyws-sharif355.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateBooks></UpdateBooks>,
        loader: ({ params }) =>
          fetch(
            `      https://library-management-server-k3pz7vyws-sharif355.vercel.app/categories/${params.id}`
          ),
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
        loader: ({ params }) =>
          fetch(
            `      https://library-management-server-k3pz7vyws-sharif355.vercel.app/categories/${params.category}`
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
