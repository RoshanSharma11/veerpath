import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Upskill() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const dummyCourses = [
      {
        title: "Python for Everybody",
        url: "https://www.coursera.org/learn/python",
        partner: "University of Michigan",
        rating: "4.8",
        image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90"
      },
      {
        title: "AI for Medicine",
        url: "https://www.coursera.org/specializations/ai-for-medicine",
        partner: "DeepLearning.AI",
        rating: "4.7",
        image: "https://www.just-medical.ch/hubfs/AI-diagnostic_855591230.jpeg"
      },
      {
        title: "Google Data Analytics",
        url: "https://www.coursera.org/professional-certificates/google-data-analytics",
        partner: "Google",
        rating: "4.8",
        image: "https://blogger.googleusercontent.com/img/a/AVvXsEgDWZDv_VE9srgbxXRixpMmjazdoRNwx7zNJ9SxBwKE68H5c18tiVdTdYa9pTNBhjdwwgtLtzvNZvmd9CTnNkmmirSo3gYGFAFDN1TgiKKhSKvejRxrudVUItzu3VcN8IzUJVCkSP-7iZN-4Ufd-RxPaTx0G8pvD18-7gZ1eAInbx8PCIioki3GKWiD=w1200-h630-p-k-no-nu"
      },
      {
        title: "Machine Learning",
        url: "https://www.coursera.org/learn/machine-learning",
        partner: "Stanford University",
        rating: "4.9",
        image: "https://www.trentonsystems.com/hubfs/Machine_Learning%20.jpeg"
      },
      {
        title: "Introduction to Cyber Security",
        url: "https://www.coursera.org/learn/intro-cyber-security",
        partner: "NYU",
        rating: "4.6",
        image: "https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/67b98625472de816d0951c58_65bcbb02d38aec8f6ce1f1ab_L%2526D_Cyber%2526ITSecurity_Hero.png"
      },
      {
        title: "Responsive Web Design",
        url: "https://www.coursera.org/learn/responsive-web-design",
        partner: "University of London",
        rating: "4.7",
        image: "https://admin.12grids.com/uploads/blogs/original_cover_images/future-of-responsive-web-design-12grids.jpg"
      },
      {
        title: "Data Structures and Algorithms",
        url: "https://www.coursera.org/learn/data-structures-algorithms",
        partner: "UC San Diego",
        rating: "4.8",
        image: "https://www.synergisticit.com/wp-content/uploads/2020/09/Data-structures-and-algorithms-new.webp"
      },
      {
        title: "The Science of Well-Being",
        url: "https://www.coursera.org/learn/the-science-of-well-being",
        partner: "Yale University",
        rating: "4.9",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5l2YV6F-HEDSoFflAYpHWFNsydGy6UjM8g&s"
      },
      {
        title: "Blockchain Basics",
        url: "https://www.coursera.org/learn/blockchain-basics",
        partner: "University at Buffalo",
        rating: "4.6",
        image: "https://media.licdn.com/dms/image/v2/D5612AQFNAhHuiv52yw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1725367044293?e=2147483647&v=beta&t=n2LG1QHzythSTNuc9nrgqJyDaAcmjYSXFgcpUCp22d4"
      },
      {
        title: "Google IT Support",
        url: "https://www.coursera.org/professional-certificates/google-it-support",
        partner: "Google",
        rating: "4.7",
        image: "https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg"
      },
      {
        title: "Cloud Computing Basics",
        url: "https://www.coursera.org/learn/cloud-computing-basics",
        partner: "University of Illinois",
        rating: "4.6",
        image: "https://techsparks.co.in/wp-content/uploads/2021/01/Cloud-computing.jpg"
      },
      {
        title: "Excel Skills for Business",
        url: "https://www.coursera.org/specializations/excel",
        partner: "Macquarie University",
        rating: "4.8",
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION!~excel/XDP~SPECIALIZATION!~excel.jpeg"
      },
      {
        title: "Programming for the Web with JavaScript",
        url: "https://www.coursera.org/learn/javascript",
        partner: "University of Pennsylvania",
        rating: "4.7",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*lBa9nbB7jYpd_YKi5uu6Cg.jpeg"
      },
      {
        title: "UI/UX Design Specialization",
        url: "https://www.coursera.org/specializations/ui-ux-design",
        partner: "CalArts",
        rating: "4.6",
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION!~ui-ux-design/XDP~SPECIALIZATION!~ui-ux-design.jpeg"
      },
      {
        title: "Database Management Essentials",
        url: "https://www.coursera.org/learn/database-management",
        partner: "University of Colorado",
        rating: "4.7",
        image: "https://blogs.bmc.com/wp-content/uploads/2021/12/introduction-of-dbms.webp"
      },
      {
        title: "Digital Marketing Specialization",
        url: "https://www.coursera.org/specializations/digital-marketing",
        partner: "University of Illinois",
        rating: "4.8",
        image: "https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg"
      },
      {
        title: "Android App Development",
        url: "https://www.coursera.org/learn/android-app-development",
        partner: "Vanderbilt University",
        rating: "4.6",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8lMBu6Fy1ANx_prD9os0QeD5LoGKxy_TSg&s"
      },
      {
        title: "Financial Markets",
        url: "https://www.coursera.org/learn/financial-markets-global",
        partner: "Yale University",
        rating: "4.8",
        image: "https://images.saymedia-content.com/.image/t_share/MTc2MjY0MTAwODg2NzUwMzk4/financial-markets-all-you-need-to-know.jpg"
      },
      {
        title: "Natural Language Processing",
        url: "https://www.coursera.org/learn/natural-language-processing",
        partner: "DeepLearning.AI",
        rating: "4.9",
        image: "https://img-c.udemycdn.com/course/240x135/1026604_790b_2.jpg"
      },
      {
        title: "Introduction to Artificial Intelligence",
        url: "https://www.coursera.org/learn/ai-introduction",
        partner: "IBM",
        rating: "4.7",
        image: "https://miro.medium.com/v2/resize:fit:1400/0*aa8L-QTjg37pQybk"
      }
    ];

    setCourses(dummyCourses);
  }, []);

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
          <button className="bg-[#54bbaa] text-white px-4 py-2 rounded-full hover:bg-[#00cdae] transition">Sign Up</button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">Login</button>
        </div>
      </nav>

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
