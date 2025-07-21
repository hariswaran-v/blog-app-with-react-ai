import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `hover:text-rose-400 transition ${
      pathname === path ? "text-rose-400 font-semibold" : "text-white"
    }`;

  return (
    <nav className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-rose-400">
        BlogApp
      </Link>
      <div className="flex gap-6">
        <Link to="/" className={navLinkClass("/")}>
          Home
        </Link>
        <Link to="/blogs" className={navLinkClass("/blogs")}>
          Blogs
        </Link>
        <Link to="/create" className={navLinkClass("/create")}>
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
