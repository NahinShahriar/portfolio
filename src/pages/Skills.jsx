import React from "react";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["PHP", "Laravel", "MySQL"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "Vite", "npm"],
};

function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">My Skills</h2>

        {/* Frontend */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.frontend.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <p className="text-center font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.backend.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <p className="text-center font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tools & Others</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.tools.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <p className="text-center font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
