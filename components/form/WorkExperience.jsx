import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes } from "react-icons/fa";

const WorkExperience = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);

  const handleWorkExperience = (e, index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Work Experience</h2>
      <p className="text-xs text-gray-500 mb-4">
        List your work experience in reverse chronological order (most recent first). Focus on achievements and quantifiable results.
      </p>
      <div className="space-y-4">
        {resumeData.workExperience.map((workExperience, index) => (
          <div key={index} className="relative space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {/* 删除按钮 */}
          {resumeData.workExperience.length > 1 && (
            <button
              type="button"
              onClick={() => removeWorkExperience(index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove work experience"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          )}
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Company Name *</label>
            <input
              type="text"
              placeholder="e.g., Google, Microsoft, Apple Inc."
              name="company"
              className="w-full other-input"
              value={workExperience.company}
              onChange={(e) => handleWorkExperience(e, index)}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Job Title *</label>
            <input
              type="text"
              placeholder="e.g., Senior Software Engineer, Marketing Manager"
              name="position"
              className="w-full other-input"
              value={workExperience.position}
              onChange={(e) => handleWorkExperience(e, index)}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Company Description</label>
            <textarea
              placeholder="e.g., Leading technology company specializing in cloud computing and AI solutions. Serves millions of users worldwide."
              name="description"
              className="w-full other-input h-24 resize-none"
              value={workExperience.description}
              maxLength="250"
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <div className="text-xs text-gray-400 mt-1 text-right">
              {workExperience.description.length}/250 characters
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs text-gray-600 mb-1">Key Achievements & Responsibilities *</label>
            <p className="text-xs text-gray-500 mb-2">
              Use bullet points. Start each point with action verbs. Include numbers and metrics when possible.
            </p>
            <textarea
              placeholder="• Developed and launched 5 new features that increased user engagement by 25%&#10;• Led a team of 8 developers in migrating legacy systems to microservices architecture&#10;• Reduced application load time by 40% through performance optimization&#10;• Collaborated with product managers to define technical requirements for new initiatives"
              name="keyAchievements"
              className="w-full other-input h-32 resize-none"
              value={workExperience.keyAchievements}
              onChange={(e) => handleWorkExperience(e, index)}
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
                value={workExperience.startYear}
                onChange={(e) => handleWorkExperience(e, index)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                name="endYear"
                className="other-input"
                value={workExperience.endYear}
                onChange={(e) => handleWorkExperience(e, index)}
              />
              <p className="text-xs text-gray-400 mt-1">Leave empty if current position</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addWorkExperience}
        className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 mt-4"
      >
        <span className="text-lg">+</span>
        <span>Add Work Experience</span>
      </button>
    </div>
  );
};

export default WorkExperience;
