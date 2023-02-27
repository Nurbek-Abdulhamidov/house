import React from "react";
import useId from "../hooks/useId";

import Favourite from "../pages/Favourites";
import AddNewHouse from "../pages/AddNewHouse";
import SigninPage from "../pages/Register";

const HomePage = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"));
const MyprofilePage = React.lazy(() => import("../pages/Myprofile"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <HouseItemPage />
      </React.Suspense>
    ),
    title: "Single home",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <MyprofilePage />
      </React.Suspense>
    ),
    title: "My Profile",
    path: "/myprofile",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/newhouse",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <SigninPage />,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Favourite />,
    title: "Favourite",
    path: "/myfavourites",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
