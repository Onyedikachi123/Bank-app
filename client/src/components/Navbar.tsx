import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-end items-center shadow-md">
      <div>
        <Link
          to="/signin"
          className="text-blue-500 bg-white border-2 border-blue-500 rounded-md px-4 py-2 mr-2 hover:bg-blue-500 hover:text-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
