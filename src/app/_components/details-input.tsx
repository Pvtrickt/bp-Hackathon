"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface DetailsInputProps {
  type: string;
  icon?: React.ReactNode; // The icon can be any valid React node
  placeholder?: string; // Placeholder text for the input
  value: string; // Input value (controlled component)
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Change handler function
  password?: boolean; // Boolean indicating if the input is a password field
}

// Define the TextInput component
const DetailsInput: FC<DetailsInputProps> = ({
  type,
  icon,
  placeholder,
  value,
  onChange,
  password,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-row items-center rounded-lg bg-white p-[10px] pr-3 text-xs shadow-2xl">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type={password && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 outline-none"
      />
      {password && (
        <span onClick={togglePasswordVisibility} className="cursor-pointer">
          {isPasswordVisible ? (
            <FaEyeSlash className="text-brand-purple-dark" />
          ) : (
            <FaEye className="text-brand-purple-dark" />
          )}
        </span>
      )}
    </div>
  );
};

export default DetailsInput;
