import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">My Notes App</h1>
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/notes" className="hover:underline">Notes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
