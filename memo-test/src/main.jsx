import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { homePageLoader } from "./loaders/homePageLoader.js";
import { groupsPageLoader } from "./loaders/groupsPageLoader.js";
import { membersPageLoader } from "./loaders/membersPageLoader.js";

import { App } from "./App.jsx";
import { HomePage } from "./pages/home/HomePage.jsx";
import { ErrorPage } from "./pages/error/ErrorPage.jsx";
import { GroupsPage } from "./pages/groups/GroupsPage.jsx";
import { GroupDetailsPage } from "./pages/groups/GroupDetailsPage.jsx";
import { MembersPage } from "./pages/members/MembersPage.jsx";
import { MemberDetailsPage } from "./pages/members/MemberDetailsPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: homePageLoader,
        element: <HomePage />,
      },
      {
        path: "/groups",
        loader: groupsPageLoader,
        element: <GroupsPage />,
      },
      {
        path: "/groups/:id",
        element: <GroupDetailsPage />,
      },
      {
        path: "/members",
        loader: membersPageLoader,
        element: <MembersPage />,
      },
      {
        path: "/members/:id",
        element: <MemberDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
