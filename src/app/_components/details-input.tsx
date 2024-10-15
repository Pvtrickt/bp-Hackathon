"use client";
import React, { ChangeEvent, FC } from "react";

interface DetailsInputProps {
  icon?: React.ReactNode; // The icon can be any valid React node
  placeholder?: string; // Placeholder text for the input
  value: string; // Input value (controlled component)
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Change handler function
}
// Define the TextInput component
const DetailsInput: FC<DetailsInputProps> = ({
  icon,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="rounded-lg p-[6px] text-sm shadow-2xl">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 outline-none"
      />
    </div>
  );
};

export default DetailsInput;
