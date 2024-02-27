import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 pl-2" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          {...props}
          id={id}
          ref={ref}
          className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-green-50 duration-200 border border-green-200 w-full`}
        />
      </div>
    );
  }
);

export default Input;
