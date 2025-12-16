import React from "react";
import SignupForm from "./SignupForm";
import Navbar from "../ui/Navbar";

const Signup = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />

        <div className="flex min-h-full flex-col justify-center px-6 py-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>

          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
