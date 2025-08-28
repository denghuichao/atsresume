import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import ContactInfo from '../../preview/ContactInfo';
import Image from "next/image";
import { getTypographyClasses, getColorStyle } from '../templateUtils';

const TemplateHeader = ({ template, resumeData }) => {
  const icons = [
    { name: "github", icon: <FaGithub /> },
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "youtube", icon: <FaYoutube /> },
    { name: "website", icon: <CgWebsite /> },
  ];

  return (
    <div className="f-col items-center mb-1 text-center">
      {resumeData.profilePicture.length > 0 && (
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 template-border mx-auto">
          <Image
            src={resumeData.profilePicture}
            alt="profile"
            width={100}
            height={100}
            className="object-cover h-full w-full"
          />
        </div>
      )}
      
      {resumeData.name && (
        <h2 className={`${getTypographyClasses(template, 'name')} text-center`}>
          {resumeData.name}
        </h2>
      )}
      
      {resumeData.position && (
        <p className={`${getTypographyClasses(template, 'profession')} text-center`}>
          {resumeData.position}
        </p>
      )}
      
      <ContactInfo
        mainclass="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mb-1 contact template-content"
        linkclass="inline-flex items-center gap-1 template-content"
        teldata={resumeData.contactInformation}
        emaildata={resumeData.email}
        addressdata={resumeData.address}
        telicon={<MdPhone />}
        emailicon={<MdEmail />}
        addressicon={<MdLocationOn />}
      />
      
      {resumeData.socialMedia.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-full">
          {resumeData.socialMedia.map((socialMedia, index) => {
            const platform = socialMedia.platform || socialMedia.socialMedia.toLowerCase();
            const matchedIcon = icons.find(icon => icon.name === platform);
            
            return (
              <a
                href={`http://${socialMedia.link}`}
                aria-label={socialMedia.socialMedia}
                key={index}
                title={socialMedia.socialMedia}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 template-link text-center justify-center text-xs"
              >
                {matchedIcon && <span>{matchedIcon.icon}</span>}
                <span className="break-all">{socialMedia.link}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TemplateHeader;
