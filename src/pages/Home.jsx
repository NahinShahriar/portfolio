import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-300">Nahin Shahriar</span>
        </h1>
        <p className="text-xl mb-8 max-w-lg mx-auto">
          I’m a passionate Full Stack Developer specializing in React and Laravel. I build clean, efficient, and beautiful web apps.
        </p>

        <div className="space-x-6">
          <Link
            to="/projects"
            className="inline-block bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
          >
            See My Projects
          </Link>

          <Link
            to="/contact"
            className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
