import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COURSES_DATA } from "../../constants/course_data";
import Navbar from "../ui/Navbar";

function Upskill() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCourses(COURSES_DATA);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Empowering Futures Through Education</h1>
        <p className="text-gray-600 mt-2 px-4 md:px-0 max-w-3xl mx-auto">
          Explore our curated courses designed to help soldiers’ families thrive in their careers.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center px-6 mb-10">
        <input
          type="text"
          placeholder="Search for courses by skills, duration, or popularity"
          className="w-full max-w-2xl px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5BE]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Featured Courses Title */}
      <h2 className="text-xl font-semibold px-6 mb-4">Featured Courses</h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((course, index) => (
            <a
              key={index}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg border shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-md text-black mb-1">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{course.partner}</p>
              <p className="text-gray-700 text-sm">⭐ {course.rating}</p>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Upskill;
