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

const CreativeTemplate = ({ template, resumeData, onDragEnd }) => {
  return (
    <TemplateContainer templateId={template.id} className="creative-layout">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Header Section */}
        <TemplateHeader 
          template={template}
          resumeData={resumeData}
        />
        
        <hr className="border-dashed my-2 template-border" />
        
        {/* Asymmetric Two Column Layout */}
        <div className={getLayoutClasses(template, 'container')}>
          {/* Left Column (Wider) */}
          <div className={getLayoutClasses(template, 'leftColumn')}>
            {template.sections.placement.left.includes('experience') && (
              <TemplateWorkExperience 
                template={template}
                resumeData={resumeData}
              />
            )}
            
            {template.sections.placement.left.includes('projects') && (
              <TemplateProjects 
                template={template}
                resumeData={resumeData}
              />
            )}
          </div>
          
          {/* Right Column (Narrower) */}
          <div className={getLayoutClasses(template, 'rightColumn')}>
            {template.sections.placement.right.includes('summary') && (
              <TemplateSummary 
                template={template}
                resumeData={resumeData}
              />
            )}
            
            {template.sections.placement.right.includes('skills') && (
              <TemplateSkills 
                template={template}
                resumeData={resumeData}
              />
            )}
            
            {template.sections.placement.right.includes('education') && (
              <TemplateEducation 
                template={template}
                resumeData={resumeData}
              />
            )}
            
            {template.sections.placement.right.includes('languages') && (
              <TemplateLanguages 
                template={template}
                resumeData={resumeData}
              />
            )}
            
            {template.sections.placement.right.includes('certifications') && (
              <TemplateCertifications 
                template={template}
                resumeData={resumeData}
              />
            )}
          </div>
        </div>
      </DragDropContext>
    </TemplateContainer>
  );
};

export default CreativeTemplate;
