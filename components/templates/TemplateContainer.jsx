import React, { useEffect, useState } from 'react';
import { getTemplate } from './templateConfig';

const TemplateContainer = ({ templateId, children, className = "" }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const template = getTemplate(templateId);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [templateId]);

  const getTemplateClassName = () => {
    const baseClasses = `template-${template.id} template-transition w-8.5in resume-preview-area`;
    const transitionClass = isTransitioning ? 'template-fade-in' : '';
    return `${baseClasses} ${transitionClass} ${className}`;
  };

  const getTemplateStyles = () => {
    return {
      '--template-primary': template.styles.colors.primary,
      '--template-secondary': template.styles.colors.secondary,
      '--template-accent': template.styles.colors.accent,
      '--template-text': template.styles.colors.text,
      '--template-border': template.styles.colors.border,
      '--template-bg': template.styles.colors.bg || '#ffffff',
      minHeight: '11in', // A4 height
      maxWidth: '8.5in', // A4 width
      margin: '0 auto',
      background: 'var(--template-bg)',
      position: 'relative'
    };
  };

  return (
    <div 
      className={getTemplateClassName()}
      style={getTemplateStyles()}
      id="resume-preview"
    >
      {children}
    </div>
  );
};

export default TemplateContainer;
