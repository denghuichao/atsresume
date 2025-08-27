import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes } from "react-icons/fa";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      <p className="text-xs text-gray-500 mb-4">
        Showcase your personal projects, side projects, or significant work projects. Focus on technical achievements and measurable impact.
      </p>
      <div className="space-y-4">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="relative space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {/* 删除按钮 */}
          {resumeData.projects.length > 1 && (
            <button
              type="button"
              onClick={() => removeProjects(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove project"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          )}
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Project Name *</label>
            <input
              type="text"
              placeholder="e.g., E-commerce Website, Mobile App, Data Analytics Dashboard"
              name="name"
              className="w-full other-input"
              value={project.name}
              onChange={(e) => handleProjects(e, index)}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Project Link</label>
            <input
              type="text"
              placeholder="e.g., https://github.com/username/project or https://myproject.com"
              name="link"
              className="w-full other-input"
              value={project.link}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Project Description</label>
            <textarea
              placeholder="e.g., A full-stack e-commerce platform built with React and Node.js. Features include user authentication, payment processing, inventory management, and real-time notifications."
              name="description"
              className="w-full other-input h-24 resize-none"
              value={project.description}
              maxLength="250"
              onChange={(e) => handleProjects(e, index)}
            />
            <div className="text-xs text-gray-400 mt-1 text-right">
              {project.description.length}/250 characters
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Key Achievements & Technologies *</label>
            <p className="text-xs text-gray-500 mb-2">
              Highlight technical challenges solved, technologies used, and measurable results. Use bullet points for clarity.
            </p>
            <textarea
              placeholder="• Built responsive UI with React, TypeScript, and Tailwind CSS&#10;• Implemented RESTful APIs using Node.js and Express&#10;• Integrated Stripe payment gateway for secure transactions&#10;• Achieved 95% test coverage with Jest and React Testing Library&#10;• Deployed on AWS with CI/CD pipeline using GitHub Actions"
              name="keyAchievements"
              className="w-full other-input h-32 resize-none"
              value={project.keyAchievements}
              onChange={(e) => handleProjects(e, index)}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">Start Date *</label>
              <input
                type="date"
                name="startYear"
                className="other-input"
                value={project.startYear}
                onChange={(e) => handleProjects(e, index)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                name="endYear"
                className="other-input"
                value={project.endYear}
                onChange={(e) => handleProjects(e, index)}
              />
              <p className="text-xs text-gray-400 mt-1">Leave empty if ongoing project</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addProjects}
        className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 mt-4"
      >
        <span className="text-lg">+</span>
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default Projects;
