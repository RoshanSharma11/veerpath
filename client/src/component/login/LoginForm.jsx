import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";

const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

	const handleLogin = async (e) => {
		e.preventDefault();
    try {
      const { email, password } = formData;
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
	};
  
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border-gray-100 border p-10 rounded-lg shadow-sm">
        <form className="space-y-6" onSubmit={handleLogin} method="POST">
          <Input
              label="Email"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              forgotPwd={true}
              value={formData.password}
              onChange={handleChange}
            />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <Link
            to="/sign-up"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
