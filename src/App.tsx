import * as React from "react";
import { AppRoutes } from "./routes";
import { RecoilRoot } from "recoil";

export function App() {
  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
}
