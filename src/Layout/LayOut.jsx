import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoutes";

// Pages...............
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import User from "../pages/user/User";

// Components........
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";

export default function LayOut() {
  // Feed......
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    );
  };

  // Router.....
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: (
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            // <ProtectedRoute>
              <Profile />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/user/:id",
          element: (
            // <ProtectedRoute>
              <User />
            // </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
