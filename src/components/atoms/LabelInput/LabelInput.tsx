import * as React from "react";
import { useState, useEffect } from "react";

type LabelInputProps = {
  labelText?: string;
  name: string;
  type?: "text" | "email" | "password" | "tel" | "number" | "date" | "file";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasHelperText?: boolean;
  helperText?: string;
  value: string | number;
  placeholder?: string;
  hasLabel?: boolean;
  hasValidationError?: boolean;
  hasValidationSuccess?: boolean;
  hasRequiredIndicator?: boolean;
};

export const LabelInput = (props: LabelInputProps) => {
  const [inputValue, setInputValue] = useState<string | number>(props.value);
  const [inputStatus, setInputStatus] = useState<string>();

  useEffect(() => {
    if (props.hasValidationError) {
      setInputStatus("error");
    } else if (props.hasValidationSuccess) {
      setInputStatus("success");
    } else {
      setInputStatus("");
    }
  }, [props.hasValidationError]);

  function renderInputRings(inputStatus: string | undefined) {
    switch (inputStatus) {
      case "success":
        return "ring-2 ring-inset ring-green-500";
      case "error":
        return "ring-2 ring-inset ring-red-500";
      default:
        return "ring-1 ring-inset ring-gray-300";
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    props.onChange(event);
  };

  return (
    <div className="w-full">
      {props.hasLabel && (
        <label
          htmlFor={`${props.name}Input`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.labelText}{" "}
          {props.hasRequiredIndicator && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          name={props.name}
          id={`${props.name}Input`}
          onChange={handleInputChange}
          value={inputValue}
          className={`form-input block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm bg-gray-100 ${renderInputRings(
            inputStatus
          )} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6`}
          placeholder={props.placeholder || "Placeholder..."}
        />
        {props.hasHelperText && (
          <p className="mt-2 text-sm text-gray-600" id="helperDescription">
            {props.helperText}
          </p>
        )}
        {props.hasValidationError && (
          <p className="mt-2 text-sm text-red-500" id="errorDescription">
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};
