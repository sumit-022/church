import React from "react";
import clsx from "clsx";

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  label,
  required,
  id,
  className,
  type,
  value,
  onChange,
  onFocus,
}) => {
  return type === "textarea" ? (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={clsx(
        "border border-gray-300 rounded-md resize-none outline-none focus:border-primary-yellow",
        className
      )}
      value={value}
      rows={4}
      onChange={onChange}
    />
  ) : (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-[#8d9297]">
          {label}
          {required && <span className="text-[#8d9297]">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "border border-gray-300 rounded-md outline-none focus:border-primary-yellow",
          className
        )}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
