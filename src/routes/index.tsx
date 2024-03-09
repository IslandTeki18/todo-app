import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./authRoutes";
import { useRecoilValue } from "recoil";
import { isAuthenticatedSelector } from "~src/stores";
import { nonAuthRoutes } from "./nonAuthRoutes";

export function AppRoutes() {
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);

  let routes = [...nonAuthRoutes];
  if (isAuthenticated) {
    routes = [...authRoutes];
  }
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
