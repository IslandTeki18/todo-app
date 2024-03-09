import * as React from "react";
import { ListTodosView } from "~src/features";

export const mainRoutes = [
  {
    index: true,
    path: "/",
    element: <ListTodosView />,
  },
  {
    path: "/about",
    element: "About",
  },
  {
    path: "/contact",
    element: "Contact",
  },
];
