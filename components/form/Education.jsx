import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes } from "react-icons/fa";

const Education = () => {
    const { resumeData, setResumeData} = useContext(ResumeContext);

    const handleEducation = (e, index) => {
      const newEducation = [...resumeData.education];
      newEducation[index][e.target.name] = e.target.value;
      setResumeData({ ...resumeData, education: newEducation });
    };
  
    const addEducation = () => {
      setResumeData({
        ...resumeData,
        education: [
          ...resumeData.education,
          { school: "", degree: "", startYear: "", endYear: "" },
        ],
      });
    };
  
    const removeEducation = (index) => {
      const newEducation = [...resumeData.education];
      newEducation[index] = newEducation[newEducation.length - 1];
      newEducation.pop();
      setResumeData({ ...resumeData, education: newEducation });
    };
    
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">Education</h2>
        <p className="text-xs text-gray-500 mb-4">
          Add your educational background, starting with the most recent. Include degrees, certifications, and relevant coursework.
        </p>
        <div className="space-y-4">
          {resumeData.education.map((education, index) => (
            <div key={index} className="relative space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              {/* 删除按钮 */}
              {resumeData.education.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove education"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              )}
              
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">School/Institution *</label>
                <input
                  type="text"
                  placeholder="e.g., Stanford University, MIT"
                  name="school"
                  className="w-full other-input"
                  value={education.school}
                  onChange={(e) => handleEducation(e, index)} 
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Degree/Program *</label>
                <input
                  type="text"
                  placeholder="e.g., Bachelor of Computer Science, MBA"
                  name="degree"
                  className="w-full other-input"
                  value={education.degree}
                  onChange={(e) => handleEducation(e, index)} 
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Start Date</label>
                <input
                  type="date"
                  name="startYear"
                  className="other-input"
                  value={education.startYear}
                  onChange={(e) => handleEducation(e, index)} 
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">End Date</label>
                <input
                  type="date"
                  name="endYear"
                  className="other-input"
                  value={education.endYear}
                  onChange={(e) => handleEducation(e, index)} 
                />
                <p className="text-xs text-gray-400 mt-1">Leave empty if currently enrolled</p>
              </div>
            </div>
          </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 mt-4"
        >
          <span className="text-lg">+</span>
          <span>Add Education</span>
        </button>
      </div>
    );
  }

export default Education;