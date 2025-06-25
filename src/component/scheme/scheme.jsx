import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SCHEMES_DATA } from "../../constants/schemes_data";
import Navbar from "../ui/Navbar";
import { Search } from "lucide-react";

function Scheme() {
  const [schemes, setSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    setSchemes(SCHEMES_DATA);
  }, []);

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

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
            className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg shadow-sm focus:outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-3 text-gray-400">
            <Search />
          </span>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6">Available Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="flex items-center justify-between bg-white rounded-xl border border-slate-300 p-6 shadow hover:shadow-lg transition">
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
