import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center  font-bold text-xl">
          <span className="text-black font-bold">Veer</span>
          <span className="text-[#54bbaa]">Path</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/job" className="hover:text-black">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/scheme" className="hover:text-black">
              Schemes
            </Link>
          </li>
          <li>
            <Link to="/upskill" className="hover:text-black">
              Upskill
            </Link>
          </li>
          <li>
            <Link to="/community" className="hover:text-black">
              Community
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <Dropdown />
          ) : (
            <>
              <button className=" text-gray-800 font-medium px-4 py-2 rounded-md underline underline-offset-2  transition">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-[#54bbaa] text-white px-4 py-2 rounded-md hover:bg-[#00cdae] font-medium transition">
                <Link to="/sign-up">Sign Up</Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
