import { selector } from "recoil";
import { authState } from "~src/stores";

export const isAuthenticatedSelector = selector({
    key: "isAuthenticatedSelector",
    get: ({ get }) => {
        const auth = get(authState);
        return auth.isAuthenticated;
    },
});