/**
 * Template styling utilities for dynamic theme application
 */

export const getTemplateClasses = (template, baseClasses = '') => {
  const templateClass = `template-${template.id}`;
  return `${templateClass} ${baseClasses}`.trim();
};

export const getTypographyClasses = (template, element) => {
  const baseClass = `template-${element}`;
  const templateSpecific = template.styles.typography[element];
  
  // Map template-specific styles to CSS classes
  const styleMap = {
    'text-xl': 'text-xl',
    'text-2xl': 'text-2xl', 
    'text-lg': 'text-lg',
    'text-base': 'text-base',
    'text-sm': 'text-sm',
    'text-xs': 'text-xs',
    'font-bold': 'font-bold',
    'font-medium': 'font-medium',
    'font-normal': 'font-normal',
    'italic': 'italic'
  };
  
  const mappedClasses = templateSpecific
    .split(' ')
    .map(cls => styleMap[cls] || cls)
    .join(' ');
    
  return `${baseClass} ${mappedClasses}`.trim();
};

export const getSectionTitleClasses = (template) => {
  const baseClasses = 'template-section-title editable';
  const layoutSpecific = `${template.id}-section-title`;
  return `${baseClasses} ${layoutSpecific}`;
};

export const getLayoutClasses = (template, element) => {
  return template.styles.layout[element] || '';
};

export const getDragClasses = (isDragging, baseClasses = '') => {
  const dragClass = isDragging ? 'template-dragging' : '';
  return `${baseClasses} ${dragClass}`.trim();
};

export const getAnimationClasses = (shouldAnimate = false) => {
  return shouldAnimate ? 'template-fade-in' : '';
};

export const generateInlineStyles = (template, overrides = {}) => {
  return {
    '--current-primary': template.styles.colors.primary,
    '--current-secondary': template.styles.colors.secondary,
    '--current-accent': template.styles.colors.accent,
    '--current-text': template.styles.colors.text,
    '--current-border': template.styles.colors.border,
    '--current-bg': template.styles.colors.bg || '#ffffff',
    ...overrides
  };
};

export const getSpacingClasses = (template, type) => {
  return template.styles.spacing[type] || '';
};

export const getColorStyle = (template, colorType) => {
  return {
    color: template.styles.colors[colorType]
  };
};

export const getBorderStyle = (template, borderType = 'border') => {
  return {
    borderColor: template.styles.colors.border
  };
};

export const getBackgroundStyle = (template, backgroundType = 'accent') => {
  return {
    backgroundColor: template.styles.colors[backgroundType]
  };
};
