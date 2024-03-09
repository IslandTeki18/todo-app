import * as React from "react";
import { ListTodosView } from "~src/features";

export const mainRoutes = [
  {
    index: true,
    path: "/",
    component: <ListTodosView />,
  },
  {
    path: "/about",
    component: "About",
  },
  {
    path: "/contact",
    component: "Contact",
  },
];
