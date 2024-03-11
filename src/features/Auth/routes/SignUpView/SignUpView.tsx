import * as React from "react";
import { useState } from "react";
import { SignUpForm } from "../../components";
import { ConfirmationEmailModal } from "../../components/ConfirmationEmailModal/ConfirmationEmailModal";

export const SignUpView = () => {
  const [isConfirmationEmailModalOpen, setIsConfirmationEmailModalOpen] =
    useState(false);
  return (
    <div className="min-h-screen">
      <SignUpForm
        onSubmit={() => {
          setIsConfirmationEmailModalOpen(true);
        }}
      />
      <ConfirmationEmailModal
        isOpen={isConfirmationEmailModalOpen}
        onClose={() => {
          setIsConfirmationEmailModalOpen(false);
        }}
      />
    </div>
  );
};
