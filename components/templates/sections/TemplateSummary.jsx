import React from 'react';
import { getSectionTitleClasses, getTypographyClasses, getSpacingClasses } from '../templateUtils';

const TemplateSummary = ({ template, resumeData }) => {
  if (!resumeData.summary || resumeData.summary.length === 0) {
    return null;
  }

  return (
    <div className={getSpacingClasses(template, 'itemGap')}>
      <h2 className={getSectionTitleClasses(template)}>
        Summary
      </h2>
      <p className={`${getTypographyClasses(template, 'content')} break-words`}>
        {resumeData.summary}
      </p>
    </div>
  );
};

export default TemplateSummary;
