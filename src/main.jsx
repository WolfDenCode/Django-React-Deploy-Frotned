import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/create",
    element: <TaskForm />,
  },
  {
    path: "/edit/:id",
    element: <TaskForm />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
