import React from "react";

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return type === "textarea" ? (
    <textarea
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 px-2 py-3 rounded-md outline-none focus:border-primary-yellow"
      value={value}
      rows={4}
      onChange={onChange}
    />
  ) : (
    <input
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 px-2 py-3 rounded-md outline-none focus:border-primary-yellow"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
