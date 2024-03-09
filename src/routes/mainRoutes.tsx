import * as React from "react";
import { ListTodosView } from "~src/features";
import { SignInView, SignUpView } from "~src/features/Auth";

export const mainRoutes = [
  {
    index: true,
    path: "/",
    element: <ListTodosView />,
  },
  {
    path: "/sign-in",
    element: <SignInView />,
  },
  {
    path: "/sign-up",
    element: <SignUpView />,
  }
  
];
