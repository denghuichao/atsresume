import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes, FaPlus } from "react-icons/fa";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [newLanguage, setNewLanguage] = useState("");

  // Language tag color configuration
  const colors = {
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-200",
    hover: "hover:bg-orange-200"
  };

  // Add language
  const addLanguage = () => {
    if (newLanguage.trim()) {
      setResumeData({
        ...resumeData,
        languages: [...resumeData.languages, newLanguage.trim()]
      });
      setNewLanguage("");
    }
  };

  // Remove language
  const removeLanguage = (indexToRemove) => {
    const newLanguages = resumeData.languages.filter((_, index) => index !== indexToRemove);
    setResumeData({ ...resumeData, languages: newLanguages });
  };

  // Handle Enter key to add
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addLanguage();
    }
  };

  return (
    <div className="flex-col-gap-2">
      
      {/* Languages tags display area */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resumeData.languages.map((language, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border transition-colors`}
          >
            <span>{language}</span>
            <button
              type="button"
              onClick={() => removeLanguage(index)}
              className={`${colors.hover} rounded-full p-1 transition-colors`}
              aria-label={`Remove ${language}`}
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new language input */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500">
          Add languages you can speak, read, or write. You can optionally include proficiency level.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., English (Native), Spanish (Fluent), Mandarin (Conversational)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={addLanguage}
            disabled={!newLanguage.trim()}
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

export default Language;