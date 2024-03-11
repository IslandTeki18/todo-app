import * as React from "react";
import { useState } from "react";
import { Button, LabelInput } from "~src/components";
import { signIn } from "~src/supabase";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "~src/stores";

type SignInFormProps = {
  // Define component props here
};

export const SignInForm = (props: SignInFormProps) => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(authState);
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await signIn(signInObj.email, signInObj.password);
      if (data.user) {
        setAuthState({ isAuthenticated: true });
        navigate("/");
      }
    } catch (error) {
      console.log("Error signing in: ", error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome Back!
        </h2>
        <h5 className="text-center  text-gray-600">
          Please sign into your account
        </h5>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmitHandler}>
          <LabelInput
            labelText="Email"
            hasLabel
            name="email"
            type="email"
            placeholder="Email..."
            value={signInObj.email}
            onChange={(e) =>
              setSignInObj({ ...signInObj, email: e.target.value })
            }
          />
          <LabelInput
            labelText="Password"
            hasLabel
            name="password"
            placeholder="Password..."
            type="password"
            value={signInObj.password}
            onChange={(e) =>
              setSignInObj({ ...signInObj, password: e.target.value })
            }
          />
          <Button buttonType="submit" isFullWidth size="medium">
            Sign in
          </Button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/sign-up"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};
