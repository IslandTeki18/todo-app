import * as React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Modal, Button } from "~src/components/atoms";
import { useNavigate } from "react-router-dom";

type ConfirmationEmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ConfirmationEmailModal = (props: ConfirmationEmailModalProps) => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/sign-in");
  }
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-yellow-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <span className="text-base font-semibold leading-6 text-gray-900">
            Check your email
          </span>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              There will be a link to confirm your email address. Don't worry,
              we won't send you spam.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 ">
        <Button color="primary" size="medium" onClick={goToLogin} isFullWidth>
          Return to Login
        </Button>
      </div>
    </Modal>
  );
};
