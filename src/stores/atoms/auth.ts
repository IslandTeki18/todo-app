import { atom } from "recoil";
import { User } from "~src/types";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
  }});