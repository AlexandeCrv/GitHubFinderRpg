import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Projs from "./routes/Projs.tsx";
import { GitHubProvider } from "./context/GitHubContext.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/GitHubFinderRpg",
        element: <Home />,
      },
      {
        path: "/Projs",
        element: <Projs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GitHubProvider>
      <RouterProvider router={router} />
    </GitHubProvider>
  </React.StrictMode>
);
