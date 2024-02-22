import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex items-center border rounded-md">
      <input className="w-full px-4 py-2 outline-none" {...props} />
    </div>
  );
};

export default Input;
