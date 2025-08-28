import React from 'react';
import { getTemplate } from './templateConfig';
import ClassicTemplate from './layouts/ClassicTemplate';
import ModernTemplate from './layouts/ModernTemplate';
import CreativeTemplate from './layouts/CreativeTemplate';

const TemplateRenderer = ({ templateId = 'classic', resumeData, onDragEnd, scale = 1, className = "" }) => {
  const template = getTemplate(templateId);

  const getTemplateComponent = () => {
    switch (template.id) {
      case 'modern':
        return ModernTemplate;
      case 'creative':
        return CreativeTemplate;
      case 'minimalist':
        return ModernTemplate; // Use Modern layout for Minimalist
      case 'executive':
        return ClassicTemplate; // Use Classic layout for Executive
      case 'classic':
      default:
        return ClassicTemplate;
    }
  };

  const TemplateComponent = getTemplateComponent();

  const containerStyle = scale !== 1 ? {
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    marginBottom: `${(1 - scale) * 100}%`
  } : {};

  return (
    <div 
      className={className}
      style={containerStyle}
    >
      <TemplateComponent
        template={template}
        resumeData={resumeData}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

export default TemplateRenderer;
