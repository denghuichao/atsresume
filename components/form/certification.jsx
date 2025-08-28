import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes, FaPlus } from "react-icons/fa";

const Certification = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [newCertification, setNewCertification] = useState("");

  // Certification tag color configuration
  const colors = {
    bg: "bg-teal-100",
    text: "text-teal-800",
    border: "border-teal-200",
    hover: "hover:bg-teal-200"
  };

  // Add certification
  const addCertification = () => {
    if (newCertification.trim()) {
      setResumeData({
        ...resumeData,
        certifications: [...resumeData.certifications, newCertification.trim()]
      });
      setNewCertification("");
    }
  };

  // Remove certification
  const removeCertification = (indexToRemove) => {
    const newCertifications = resumeData.certifications.filter((_, index) => index !== indexToRemove);
    setResumeData({ ...resumeData, certifications: newCertifications });
  };

  // Handle Enter key to add
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCertification();
    }
  };

  return (
    <div className="flex-col-gap-2">
      
      {/* Certifications tags display area */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resumeData.certifications.map((certification, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border transition-colors`}
          >
            <span>{certification}</span>
            <button
              type="button"
              onClick={() => removeCertification(index)}
              className={`${colors.hover} rounded-full p-1 transition-colors`}
              aria-label={`Remove ${certification}`}
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new certification input */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500">
          Include professional certifications, licenses, or credentials you&apos;ve earned. Add the full name and issuing organization.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., AWS Certified Solutions Architect, PMP Certification, Google Analytics Certified"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={addCertification}
            disabled={!newCertification.trim()}
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

export default Certification;