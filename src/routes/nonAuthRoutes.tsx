import * as React from "react";
import { SignInView, SignUpView } from "~src/features/Auth";
import { Navigate } from "react-router-dom";

const RedirectRoute = () => {
    return <Navigate to="/sign-in" />;
}

export const nonAuthRoutes = [
    {
        index: true,
        path: "/sign-in",
        element: <SignInView />,
    },
    {
        path: "/sign-up",
        element: <SignUpView />,
    },
    {
        path: "*",
        element: <RedirectRoute />,
    }
];