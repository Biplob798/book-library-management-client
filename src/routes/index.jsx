import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import AllBook from "../pages/AllBook";
import AddBook from "../pages/AddBook";
import BorrowedBook from "../pages/BorrowedBook";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/allBook",
        element: <AllBook />,
      },
      {
        path: "/borrowedBook",
        element: <BorrowedBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
