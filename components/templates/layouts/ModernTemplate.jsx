import React from 'react';
import dynamic from 'next/dynamic';
import TemplateContainer from '../TemplateContainer';
import TemplateHeader from '../sections/TemplateHeader';
import TemplateSummary from '../sections/TemplateSummary';
import TemplateEducation from '../sections/TemplateEducation';
import TemplateSkills from '../sections/TemplateSkills';
import TemplateLanguages from '../sections/TemplateLanguages';
import TemplateCertifications from '../sections/TemplateCertifications';
import TemplateWorkExperience from '../sections/TemplateWorkExperience';
import TemplateProjects from '../sections/TemplateProjects';
import { getLayoutClasses } from '../templateUtils';

// Dynamic imports for drag and drop
const DragDropContext = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.DragDropContext),
  { ssr: false }
);

const ModernTemplate = ({ template, resumeData, onDragEnd }) => {
  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'summary':
        return <TemplateSummary key="summary" template={template} resumeData={resumeData} />;
      case 'experience':
        return <TemplateWorkExperience key="experience" template={template} resumeData={resumeData} />;
      case 'projects':
        return <TemplateProjects key="projects" template={template} resumeData={resumeData} />;
      case 'skills':
        return <TemplateSkills key="skills" template={template} resumeData={resumeData} />;
      case 'education':
        return <TemplateEducation key="education" template={template} resumeData={resumeData} />;
      case 'languages':
        return <TemplateLanguages key="languages" template={template} resumeData={resumeData} />;
      case 'certifications':
        return <TemplateCertifications key="certifications" template={template} resumeData={resumeData} />;
      default:
        return null;
    }
  };

  return (
    <TemplateContainer templateId={template.id} className="modern-layout">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Header Section */}
        <TemplateHeader 
          template={template}
          resumeData={resumeData}
        />
        
        <hr className="border-dashed my-2 template-border" />
        
        {/* Single Column Layout */}
        <div className={getLayoutClasses(template, 'container')}>
          {template.sections.placement.main.map((sectionName) => renderSection(sectionName))}
        </div>
      </DragDropContext>
    </TemplateContainer>
  );
};

export default ModernTemplate;
