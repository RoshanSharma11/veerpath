import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { JOBS_DATA } from "../../constants/jobs_data";
import Navbar from "../ui/Navbar";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    skills: "",
    industry: "",
  });

  useEffect(() => {
    setJobs(JOBS_DATA);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.skills || job.skills.includes(filters.skills)) &&
      (!filters.industry || job.industry === filters.industry)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center px-6 mb-10">
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border border-slate-300 p-3 rounded-md"
        >
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
        <select
          name="skills"
          value={filters.skills}
          onChange={handleFilterChange}
          className="border border-slate-300 p-3 rounded-md"
        >
          <option value="">Skills</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <select
          name="industry"
          value={filters.industry}
          onChange={handleFilterChange}
          className="border border-slate-300 p-3 rounded-md"
        >
          <option value="">Job Sector</option>
          <option value="Technology">Technology</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-20">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={job.companyLogo}
              alt={job.company}
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-md font-semibold text-black">{job.title}</h2>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
