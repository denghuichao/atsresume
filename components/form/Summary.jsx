import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
const Summary = () => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);
  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Summary</h2>
      <div className="space-y-3">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-2">
            Write a brief overview of your professional background, key skills, and career goals (2-3 sentences)
          </p>
          <textarea
            placeholder="e.g., Experienced software developer with 5+ years in full-stack development. Skilled in React, Node.js, and cloud technologies. Passionate about creating scalable applications and leading development teams."
            name="summary"
            className="w-full other-input h-40 resize-none"
            value={resumeData.summary}
            onChange={handleChange}
            maxLength="500"
          />
          <div className="text-xs text-gray-400 mt-1 text-right">
            {resumeData.summary.length}/500 characters
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
