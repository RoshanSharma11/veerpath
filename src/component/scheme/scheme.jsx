import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Scheme() {
  const [schemes, setSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const dummySchemes = [
      {
        id: 1,
        title: "Education Support Scheme",
        description: "Financial aid for children’s education, covering tuition fees and other educational expenses.",
        image: "https://cdn-icons-png.flaticon.com/512/4151/4151740.png",
      },
      {
        id: 2,
        title: "Family Welfare Grant",
        description: "One-time grant to support the immediate needs of soldiers’ families.",
        image: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
      },
      {
        id: 3,
        title: "Housing Assistance Program",
        description: "Subsidized housing or rental assistance for soldiers’ families.",
        image: "https://cdn-icons-png.flaticon.com/512/3048/3048395.png",
      },
      {
        id: 4,
        title: "Healthcare Coverage",
        description: "Comprehensive health insurance coverage for the entire family.",
        image: "https://cdn-icons-png.flaticon.com/512/3269/3269543.png",
      },
      {
        id: 5,
        title: "Skill Development Fund",
        description: "Funding for vocational training and skill development programs.",
        image: "https://cdn-icons-png.flaticon.com/512/4149/4149646.png",
      },
      {
        id: 6,
        title: "Entrepreneurship Support",
        description: "Financial and mentorship support for starting a business.",
        image: "https://cdn-icons-png.flaticon.com/512/4149/4149570.png",
      },
    ];
    setSchemes(dummySchemes);
  }, []);

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              className="px-4 py-2 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5BE]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400"></span>
          </div>
          <button className="bg-[#54bbaa] text-white px-4 py-2 rounded-full hover:bg-[#00cdae] transition">Sign Up</button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">Login</button>
        </div>
      </nav>

      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Financial Schemes for Soldiers' Families</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore a range of financial schemes designed to support the families of our soldiers. Find opportunities that match your needs and apply directly.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-4/5 md:w-1/2">
          <input
            type="text"
            placeholder="Search schemes by sector, amount, or criteria"
            className="w-full px-4 py-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5BE]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-3 text-gray-400"></span>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6">Available Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="flex items-center justify-between bg-white rounded-xl border p-6 shadow hover:shadow-lg transition">
              <div>
                <h3 className="text-md font-semibold text-black mb-2">{scheme.title}</h3>
                <p className="text-gray-600 text-sm max-w-md">{scheme.description}</p>
                <button
                  className="mt-4 bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition"
                  onClick={() => navigate(`/scheme/${scheme.id}`)}
                >
                  View Details
                </button>
              </div>
              <img
                src={scheme.image}
                alt={scheme.title}
                className="w-28 h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scheme;
