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
import BooksCategory from "../pages/BooksCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/books"),
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
        loader: () => fetch("http://localhost:5000/allBooks"),
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
        path: "/booksCategory/:category",
        element: (
          <PrivateRoute>
            <BooksCategory></BooksCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/allBooks/${params.category}`),
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
