import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import index from "./index.css";

import App from "./App";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <BlogList /> },
      { path: "blogs/:id", element: <BlogDetails /> },
      { path: "create", element: <CreatePost /> },
      { path: "edit/:id", element: <EditPost /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
