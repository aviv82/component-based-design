import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter } from "react-router";

import { App } from "./App.jsx";
import { ErrorPage } from "./pages/error/ErrorPage.jsx";
import { HomePage } from "./pages/home/HomePage.jsx";
import { GroupsPage } from "./pages/groups/GroupsPage.jsx";
import { MembersPage } from "./pages/members/MembersPage.jsx";

import { HealthLoader } from "./loaders/HealthLoader.jsx";
import { GroupDetailsPage } from "./pages/group-details/GroupDetailsPage.jsx";

const routes = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: HealthLoader,
        element: <HomePage />,
      },
      {
        path: "groups",
        element: <GroupsPage />,
      },
      {
        path: "groups/:id",
        element: <GroupDetailsPage />,
      },
      {
        path: "members",
        element: <MembersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
