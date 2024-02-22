import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { errorMessage, ...rest } = props;

  return (
    <div className="flex items-center border rounded-md">
      <input className="w-full px-4 py-2 outline-none" {...rest} />
    </div>
  );
};

export default Input;
