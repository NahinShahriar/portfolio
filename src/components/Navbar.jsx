import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Nahin Shahriar</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </li>
        <li>
          <Link to="/skills" className="text-gray-700 hover:text-blue-600">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
