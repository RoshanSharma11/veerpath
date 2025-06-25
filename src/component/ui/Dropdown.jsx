import { User } from "lucide-react";
import React from "react";

const Dropdown = () => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-800 border border-gray-300 rounded-full p-2 cursor-pointer  font-medium text-sm text-center inline-flex items-center"
          type="button"
          onClick={() => setActive(!active)}
        >
          <User size={20} />
        </button>

        <div
          id="dropdown"
          className={`absolute right-2 z-10 bg-white  border border-slate-300 shadow-md divide-y divide-gray-100 rounded-lg shadow-sm min-w-44  ${
            active ? "block" : "hidden"
          }`}
          onClick={() => setActive(!active)}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
