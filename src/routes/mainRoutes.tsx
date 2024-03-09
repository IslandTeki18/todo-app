import * as React from "react";
import { ListTodosView } from "~src/features";

export const mainRoutes = [
  {
    index: true,
    path: "/",
    element: <ListTodosView />,
  },
  {
    path: "/sign-in",
    element: <div>Sign In</div>,
  },
  {
    path: "/sign-up",
    element: <div>Sign Up</div>,
  }
  
];
