import React, { useContext, useRef } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaTimes } from "react-icons/fa";
const PersonalInformation = ({}) => {
  const { resumeData, setResumeData, handleProfilePicture, removeProfilePicture, handleChange } =
    useContext(ResumeContext);
  
  const fileInputRef = useRef(null);

  // 包装删除函数，清空文件输入框
  const handleRemoveProfilePicture = () => {
    removeProfilePicture();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      <div className="grid-4">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Full Name *</label>
          <input
            type="text"
            placeholder="e.g., John Smith"
            name="name"
            className="pi"
            value={resumeData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Job Title *</label>
          <input
            type="text"
            placeholder="e.g., Frontend Developer"
            name="position"
            className="pi"
            value={resumeData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="e.g., +1-555-0100"
            name="contactInformation"
            className="pi"
            value={resumeData.contactInformation}
            onChange={handleChange}
            minLength="10"
            maxLength="15"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Email Address *</label>
          <input
            type="email"
            placeholder="e.g., john@example.com"
            name="email"
            className="pi"
            value={resumeData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Address</label>
          <input
            type="text"
            placeholder="e.g., San Francisco, CA"
            name="address"
            className="pi"
            value={resumeData.address}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Profile Picture</label>
          
          {/* 文件名标签显示区域 */}
          {resumeData.profilePicture && resumeData.profilePictureName ? (
            <div className="mb-3">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-lg border border-blue-200 relative">
                <span className="text-sm font-medium mr-2">{resumeData.profilePictureName}</span>
                <button
                  type="button"
                  onClick={handleRemoveProfilePicture}
                  className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors ml-1"
                  title="Remove profile picture"
                >
                  <FaTimes className="w-2 h-2" />
                </button>
              </div>
            </div>
          ) : null}
          
          {/* 上传按钮 */}
          <input
            key={resumeData.profilePicture ? 'has-image' : 'no-image'}
            ref={fileInputRef}
            type="file"
            name="profileImage"
            accept="image/*"
            className="profileInput"
            onChange={handleProfilePicture}
            title={resumeData.profilePicture ? "Change profile picture" : "Upload your professional headshot (JPG, PNG, etc.)"}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
