import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import AllBook from "../pages/AllBook";
import AddBook from "../pages/AddBook";
import BorrowedBook from "../pages/BorrowedBook";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBook",
        element: (
          <PrivateRoute>
            <AllBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBook",
        element: (
          <PrivateRoute>
            {" "}
            <BorrowedBook />
          </PrivateRoute>
        ),
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
