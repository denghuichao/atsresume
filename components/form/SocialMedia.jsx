import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTimes, FaPlus } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [newUrl, setNewUrl] = useState("");

  // Platform recognition mapping
  const platformIcons = {
    github: { icon: <FaGithub />, name: "Github", color: "text-gray-700" },
    linkedin: { icon: <FaLinkedin />, name: "LinkedIn", color: "text-blue-600" },
    twitter: { icon: <FaTwitter />, name: "Twitter", color: "text-blue-400" },
    facebook: { icon: <FaFacebook />, name: "Facebook", color: "text-blue-600" },
    instagram: { icon: <FaInstagram />, name: "Instagram", color: "text-pink-500" },
    youtube: { icon: <FaYoutube />, name: "Youtube", color: "text-red-600" },
    website: { icon: <CgWebsite />, name: "Website", color: "text-gray-600" },
  };

  // Social media tag color configuration
  const colors = {
    bg: "bg-indigo-100",
    text: "text-indigo-800",
    border: "border-indigo-200",
    hover: "hover:bg-indigo-200"
  };

  // Auto-detect platform based on URL
  const detectPlatform = (url) => {
    if (!url) return "website";
    const cleanUrl = url.toLowerCase().replace(/(https?:\/\/)?(www\.)?/, "");
    
    if (cleanUrl.includes("github.com")) return "github";
    if (cleanUrl.includes("linkedin.com")) return "linkedin";
    if (cleanUrl.includes("twitter.com") || cleanUrl.includes("x.com")) return "twitter";
    if (cleanUrl.includes("facebook.com")) return "facebook";
    if (cleanUrl.includes("instagram.com")) return "instagram";
    if (cleanUrl.includes("youtube.com")) return "youtube";
    
    return "website";
  };

  // Add social media
  const addSocialMedia = () => {
    if (newUrl.trim()) {
      const platform = detectPlatform(newUrl);
      const platformInfo = platformIcons[platform];
      
      const newSocialMedia = {
        socialMedia: platformInfo.name,
        link: newUrl.replace(/^https?:\/\//, "").trim(),
        platform: platform
      };

      setResumeData({
        ...resumeData,
        socialMedia: [...resumeData.socialMedia, newSocialMedia]
      });
      setNewUrl("");
    }
  };

  // Remove social media
  const removeSocialMedia = (indexToRemove) => {
    const newSocialMedia = resumeData.socialMedia.filter((_, index) => index !== indexToRemove);
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  // Handle Enter key to add
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSocialMedia();
    }
  };

  return (
    <div className="flex-col-gap-2">
      
      {/* Social media tags display area */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resumeData.socialMedia.map((socialMedia, index) => {
          const platform = socialMedia.platform || detectPlatform(socialMedia.link);
          const platformInfo = platformIcons[platform] || platformIcons.website;
          
          return (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border transition-colors max-w-full`}
            >
              <div className={`text-lg ${platformInfo.color} flex-shrink-0`}>
                {platformInfo.icon}
              </div>
              
              {/* Display full link, truncate only when necessary */}
              <span className="text-sm truncate min-w-0 flex-1">
                {socialMedia.link}
              </span>
              
              {/* Delete button */}
              <button
                type="button"
                onClick={() => removeSocialMedia(index)}
                className={`${colors.hover} rounded-full p-1 transition-colors flex-shrink-0`}
                aria-label={`Remove ${platformInfo.name}`}
              >
                <FaTimes className="w-3 h-3" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Add new social media input */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500">
          Enter the full URL of your professional social media profiles. The platform will be automatically detected.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., https://github.com/yourusername or https://linkedin.com/in/yourprofile"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={addSocialMedia}
            disabled={!newUrl.trim()}
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

export default SocialMedia;
