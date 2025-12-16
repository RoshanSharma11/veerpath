import React from "react";
import Navbar from "../ui/Navbar";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
