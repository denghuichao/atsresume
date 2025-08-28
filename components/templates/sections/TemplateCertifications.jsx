import React from 'react';

const TemplateCertifications = ({ template, resumeData }) => {
  const { styles } = template;

  if (!resumeData.certifications || resumeData.certifications.length === 0) {
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
        Certifications
      </h2>
      <ul className="list-disc ul-padding">
        {resumeData.certifications.map((cert, index) => (
          <li 
            key={index}
            className={styles.typography.content}
            style={{ color: styles.colors.text }}
          >
            {cert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateCertifications;
