import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    skills: "",
    industry: "",
  });

  useEffect(() => {
    const dummyJobs = [
      {
        _id: "1",
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
        location: "Remote",
        skills: ["React"],
        industry: "Technology"
      },
      {
        _id: "2",
        title: "Project Manager",
        company: "Global Projects LLC",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "On-site",
        skills: ["Leadership"],
        industry: "Finance"
      },
      {
        _id: "3",
        title: "Data Analyst",
        company: "Data Insights Corp.",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/2721/2721286.png",
        location: "Remote",
        skills: ["Python"],
        industry: "Technology"
      },
      {
        _id: "4",
        title: "Marketing Specialist",
        company: "Marketing Dynamics Ltd.",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        location: "On-site",
        skills: ["Communication"],
        industry: "Marketing"
      },
      {
        _id: "5",
        title: "Customer Service Representative",
        company: "Customer Care Solutions",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/2721/2721260.png",
        location: "Remote",
        skills: ["Empathy"],
        industry: "Marketing"
      },
      {
        _id: "6",
        title: "Operations Manager",
        company: "Operational Excellence Group",
        companyLogo: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
        location: "On-site",
        skills: ["Management"],
        industry: "Finance"
      }
    ];

    setJobs(dummyJobs);
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
      <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-black font-bold">Veer</span>
          <span className="text-[#54bbaa]">Path</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/job" className="hover:text-black">Jobs</Link></li>
          <li><Link to="/scheme" className="hover:text-black">Schemes</Link></li>
          <li><Link to="/upskill" className="hover:text-black">Upskill</Link></li>
          <li><Link to="/community" className="hover:text-black">Community</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ccede8]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400"></span>
          </div>
          <button className="bg-[#54bbaa] text-white px-4 py-2 rounded-full hover:bg-[#00cdae] transition">Sign Up</button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">Login</button>
        </div>
      </nav>

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
          className="border p-2 rounded-md"
        >
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
        <select
          name="skills"
          value={filters.skills}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
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
          className="border p-2 rounded-md"
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
            className="bg-white p-6 rounded-xl border shadow-md hover:shadow-xl transition duration-300"
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
