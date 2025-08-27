import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes, FaPlus } from "react-icons/fa";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [newSkill, setNewSkill] = useState("");

  // Color configuration for different skill types
  const getSkillColor = (title) => {
    switch (title) {
      case "Technical Skills":
        return {
          bg: "bg-blue-100",
          text: "text-blue-800",
          border: "border-blue-200",
          hover: "hover:bg-blue-200"
        };
      case "Soft Skills":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          border: "border-green-200",
          hover: "hover:bg-green-200"
        };
      case "Additional Skills":
        return {
          bg: "bg-purple-100",
          text: "text-purple-800",
          border: "border-purple-200",
          hover: "hover:bg-purple-200"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-800",
          border: "border-gray-200",
          hover: "hover:bg-gray-200"
        };
    }
  };

  const colors = getSkillColor(title);

  // Add skill
  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData((prevData) => {
        const updatedSkills = prevData.skills.map((skill) =>
          skill.title === title 
            ? { ...skill, skills: [...skill.skills, newSkill.trim()] }
            : skill
        );
        return { ...prevData, skills: updatedSkills };
      });
      setNewSkill("");
    }
  };

  // Remove skill
  const removeSkill = (indexToRemove) => {
    setResumeData((prevData) => {
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title 
          ? { ...skill, skills: skill.skills.filter((_, index) => index !== indexToRemove) }
          : skill
      );
      return { ...prevData, skills: updatedSkills };
    });
  };

  // Handle Enter key to add skill
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      
      {/* Skills tags display area */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skillType.skills.map((skill, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border transition-colors`}
          >
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className={`${colors.hover} rounded-full p-1 transition-colors`}
              aria-label={`Remove ${skill}`}
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new skill input */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500">
          {title === "Technical Skills" 
            ? "Enter programming languages, frameworks, tools, or technologies you're proficient in"
            : title === "Soft Skills"
            ? "Add interpersonal skills, communication abilities, and personal qualities"
            : "Include any additional relevant skills, certifications, or abilities"
          }
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={
              title === "Technical Skills" 
                ? "e.g., JavaScript, React, Python, AWS" 
                : title === "Soft Skills"
                ? "e.g., Leadership, Problem-solving, Communication"
                : "e.g., Public Speaking, Project Management"
            }
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={addSkill}
            disabled={!newSkill.trim()}
            className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg border ${colors.border} ${colors.hover} disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2`}
          >
            <FaPlus className="w-3 h-3" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
