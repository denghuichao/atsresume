import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // load backup resume data
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = JSON.parse(event.target.result);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <>
      <h2 className="input-title">Data Management</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg border border-blue-600 hover:border-blue-700">
            <FaCloudUploadAlt className="text-lg" />
            <span className="font-medium">Load Data</span>
            <input
              aria-label="Load Data"
              type="file"
              className="hidden"
              onChange={handleLoad}
              accept=".json"
            />
          </label>
        </div>
        <div className="flex-1">
          <button
            aria-label="Save Data"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border border-green-600 hover:border-green-700"
            onClick={(event) =>
              handleDownload(
                resumeData,
                resumeData.name + " by ATSResumeBuilder.json",
                event
              )
            }
          >
            <FaCloudDownloadAlt className="text-lg" />
            <span className="font-medium">Save Data</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadUnload;
