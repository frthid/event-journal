import { createBrowserRouter } from "react-router-dom";
import Layout from "../containers/Layout";
import MainPage from "../pages/MainPage";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
    ]
  }
])