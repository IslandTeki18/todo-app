import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "~src/components";
import { ListTodosView } from "~src/features";

function AuthRoutes() {
  return (
    <div className="h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const authRoutes = [
  {
    path: "/",
    element: <AuthRoutes />,
    children: [
      {
        index: true,
        path: "/",
        element: <ListTodosView />,
      },
      {
        path: "/user-profile",
        element: <div>User Profile</div>,
      },
    ],
  },
];
