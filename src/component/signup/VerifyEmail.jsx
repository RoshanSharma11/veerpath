import React from "react";
import Navbar from "../ui/Navbar";
import Input from "../ui/Input";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const { error, isLoading, verifyEmail } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (_, value) => {
    setVerificationCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
      toast.error("Please enter a valid verification code");
    }
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Verify Your Email
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border-gray-100 border p-10 rounded-lg shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <Input
                label="Verfication Code"
                type="text"
                name="verificationCode"
                id="verificationCode"
                required
                placeholder="Enter your verificationCode address"
                value={verificationCode}
                onChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
