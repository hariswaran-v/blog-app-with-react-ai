import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBlog, FaPlusCircle, FaFilm, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const navLinkClass = (path) =>
    `flex items-center gap-2 hover:text-rose-400 transition ${
      pathname === path ? "text-rose-400 font-semibold" : "text-white"
    }`;

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Route or filter blogs using `query`
    console.log("Search query:", query);
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md gap-4">
      {/* Logo + Title */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold text-black tracking-wide bg-yellow-500 px-3 py-2 rounded italic"
      >
        <FaFilm className="text-white " />
        CineScope
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-lg">
        <Link to="/" className={navLinkClass("/")}>
          <FaHome /> Home
        </Link>
        <Link to="/blogs" className={navLinkClass("/blogs")}>
          <FaBlog /> Blogs
        </Link>
        <Link to="/create" className={navLinkClass("/create")}>
          <FaPlusCircle /> Create
        </Link>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-full px-3 py-1 shadow"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blogs..."
          className="bg-transparent outline-none text-black px-2 py-1 w-36 sm:w-48 md:w-56"
        />
        <button
          type="submit"
          className="text-indigo-600 hover:text-rose-500 transition"
        >
          <FaSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
