import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file && file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ 
          ...resumeData, 
          profilePicture: event.target.result,
          profilePictureName: file.name
        });
      };
      reader.readAsDataURL(file);
    } else if (file) {
      console.error("Invalid file type");
    }
    // If no file is selected (file is undefined), do nothing
  };

  // remove profile picture
  const removeProfilePicture = () => {
    // Clear profile picture data from resumeData
    setResumeData({ 
      ...resumeData, 
      profilePicture: "",
      profilePictureName: ""
    });
    
    // Clear the file input value
    const fileInput = document.querySelector('input[name="profileImage"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          removeProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="Resume Builder - ATSResumeBuilder"
          description="Create ATS-friendly resumes with our cutting-edge builder. Drag-and-drop interface, real-time preview, and professional templates."
          keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
          canonical="https://atsresume-sepia.vercel.app/builder"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!formClose && (
            <form className="p-6 bg-gray-50 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll border-r border-gray-200 space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Resume Builder</h2>
                <p className="text-gray-600">Create your professional ATS-friendly resume step by step</p>
              </div>
              
              <div className="form-card">
                <LoadUnload/>
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <PersonalInformation />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Social Media & Contact</h3>
                <SocialMedia />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Summary</h3>
                <Summary />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Education</h3>
                <Education />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Work Experience</h3>
                <WorkExperience />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Projects</h3>
                <Projects />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills & Expertise</h3>
                {
                  resumeData.skills.map((skill, index) => (
                    <div key={index} className="form-card">
                      <Skill
                        title={skill.title}
                      />
                    </div>
                  ))
                }
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
                <Language />
              </div>
              
              <div className="form-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Certifications</h3>
                <Certification />
              </div>
            </form>
          )}
          <Preview />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
