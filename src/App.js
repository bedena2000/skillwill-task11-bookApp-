// Router
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";

// Components
import BookInfo from "./components/BookInfo";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import User from "./pages/User";
import AppWrapper from "./components/AppWrapper";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "detailBook/:bookId",
        element: <Details />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
