import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/pages/Layout";
import { ErrorPage } from "./Layout/pages/ErrorPage/ErrorPage";
import { MainPage } from "./Main/pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "characters",
        element: <MainPage />,
      },
      {
        path: "locations",
        element: <MainPage />,
      },
      {
        path: "episodes",
        element: <MainPage />,
      },
    ],
  },
]);
