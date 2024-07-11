import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../src/routes/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/routes/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/GitHubFinderRpg",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
