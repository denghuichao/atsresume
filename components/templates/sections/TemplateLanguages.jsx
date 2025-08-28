import React from 'react';

const TemplateLanguages = ({ template, resumeData }) => {
  const { styles } = template;

  if (!resumeData.languages || resumeData.languages.length === 0) {
    return null;
  }

  return (
    <div className={styles.spacing.itemGap}>
      <h2 
        className={styles.typography.sectionTitle}
        style={{ 
          color: styles.colors.primary,
          borderColor: styles.colors.border 
        }}
      >
        Languages
      </h2>
      <p 
        className={styles.typography.content}
        style={{ color: styles.colors.text }}
      >
        {resumeData.languages.join(", ")}
      </p>
    </div>
  );
};

export default TemplateLanguages;
