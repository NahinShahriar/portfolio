import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Me</h1>

        <p className="mb-6 text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-gray-900">Nahin Shahriar</span>,
          a passionate junior web developer with experience in both frontend and backend
          development. I specialize in building full-stack applications using
          <span className="text-blue-500 font-semibold"> React</span> and
          <span className="text-green-600 font-semibold"> Laravel</span>.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          I enjoy creating clean and efficient user interfaces, REST APIs, and solving real-world
          problems through code. I’ve worked on ERP systems, CRUD apps, and small portfolio projects.
          My current focus is building full-stack web apps that are fast and scalable.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Skills</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li><span className="font-medium">Frontend:</span> React, JavaScript, HTML, CSS, Tailwind</li>
          <li><span className="font-medium">Backend:</span> PHP, Laravel, MySQL</li>
          <li><span className="font-medium">Tools:</span> Git, GitHub, VS Code, Postman</li>
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
