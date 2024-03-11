import * as React from "react";
import { useState } from "react";
import { LabelInput, Button } from "~src/components";
import { signUp } from "~src/supabase";

type SignUpFormProps = {
  // Define component props here
  onSubmit: () => void;
};

export const SignUpForm = (props: SignUpFormProps) => {
  const [signUpObj, setSignUpObj] = useState({
    email: "",
    password: "",
    confirm_password: "",
    two_auth_enabled: false,
  });

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await signUp(signUpObj.email, signUpObj.password);
      if (data) {
        // Make the profile api call here
        props.onSubmit();
      }
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  }

  function disableButton() {
    return !signUpObj.email || !signUpObj.password || !signUpObj.confirm_password || signUpObj.password !== signUpObj.confirm_password;
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Let's create your account
        </h2>
        <h5 className="text-center  text-gray-600">
          None of your data will be shared
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
            value={signUpObj.email}
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, email: e.target.value })
            }
          />
          <LabelInput
            labelText="Password"
            hasLabel
            name="password"
            placeholder="Password..."
            type="password"
            value={signUpObj.password}
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, password: e.target.value })
            }
          />
          <LabelInput
            labelText="Confirm Password"
            hasLabel
            name="confirmPassword"
            placeholder="Confirm Password..."
            type="password"
            value={signUpObj.confirm_password}
            onChange={(e) =>
              setSignUpObj({ ...signUpObj, confirm_password: e.target.value })
            }
          />
          <div>
            <Button isDisabled={disableButton()} buttonType="submit" isFullWidth size="medium">
              Create Account
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            href="/sign-in"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};
