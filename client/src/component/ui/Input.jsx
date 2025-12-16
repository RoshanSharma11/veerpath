import React from "react";
import Select from "react-select";

const Input = ({
  label,
  value,
  onChange,
  type,
  name,
  id,
  autocomplete,
  required,
  forgotPwd,
  placeholder,
  options,
  isMulti = false,
}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            {label}
          </label>
          {forgotPwd && (
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          )}
        </div>
        <div className="mt-2">
          {type === "select" ? (
            <Select options={options} isMulti={isMulti} onChange={(data) => {
              if (data instanceof Array) {
                const selectedValues = data.map(option => option.value);
                onChange(name, selectedValues);
              } else {
                onChange(name, data.value);
              }
            }} />
          ) : (
            <input
              type={type}
              name={name}
              id={id}
              autoComplete={autocomplete}
              required={required}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              value={value}
              onChange={(e) => onChange(name, e.target.value)}
              placeholder={placeholder}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
