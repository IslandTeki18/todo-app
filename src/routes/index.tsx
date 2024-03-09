import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";

export function AppRoutes() {
  const router = createBrowserRouter(mainRoutes);

  return <RouterProvider router={router} />;
}
