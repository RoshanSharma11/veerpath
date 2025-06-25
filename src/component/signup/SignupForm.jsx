import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import {
  DISABILITY_OPTIONS,
  EDUCATION_OPTIONS,
  INTEREST_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  SEX_OPTIONS,
  SKILLS_OPTIONS,
} from "../../constants/select_options";
import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

const SignupForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    age: "",
    sex: "",
    aadhar_number: "",
    education: "",
    skills: [],
    interests: [],
    location: "",
    disability: "",
    experience: "",
    maritalStatus: "",
  });
  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(formData);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-xl bg-white border-gray-100 border p-10 rounded-lg shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Name"
              type="text"
              name="name"
              id="name"
              autoComplete
              required
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Phone"
              type="phone"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Age"
              type="number"
              name="age"
              id="age"
              autoComplete="age"
              required
              value={formData.age}
              onChange={handleChange}
            />
            <Input
              label="sex"
              type="select"
              name="sex"
              id="sex"
              autoComplete=""
              required
              options={SEX_OPTIONS}
              value={formData.sex}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Aadhar Number"
              type="text"
              name="aadhar_number"
              id="aadhar_number"
              required
              value={formData.aadhar_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Education"
              type="select"
              name="education"
              id="education"
              options={EDUCATION_OPTIONS}
              required
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Skills"
              type="select"
              name="skills"
              id="skills"
              options={SKILLS_OPTIONS}
              isMulti={true}
              required
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Interets"
              type="select"
              name="interests"
              id="interests"
              isMulti={true}
              options={INTEREST_OPTIONS}
              required
              value={formData.interests}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Location"
              type="text"
              name="location"
              id="location"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Disability"
              type="select"
              name="disability"
              id="disability"
              options={DISABILITY_OPTIONS}
              required
              value={formData.disability}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Experience"
              type="number"
              name="experience"
              id="experience"
              required
              value={formData.experience}
              onChange={handleChange}
            />
            <Input
              label="Marital Status"
              type="select"
              name="martial_status"
              id="martial_status"
              options={MARITAL_STATUS_OPTIONS}
              autoComplete=""
              required
              value={formData.maritalStatus}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a member?
          <Link
            to="/sign-up"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Login now
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;
