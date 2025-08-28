import React from 'react';
import DateRange from '../../utility/DateRange';
import { getSectionTitleClasses, getTypographyClasses, getSpacingClasses } from '../templateUtils';

const TemplateEducation = ({ template, resumeData }) => {
  if (!resumeData.education || resumeData.education.length === 0 || 
      !resumeData.education.some(item => item.degree || item.school)) {
    return null;
  }

  return (
    <div className={getSpacingClasses(template, 'itemGap')}>
      <h2 className={getSectionTitleClasses(template)}>
        Education
      </h2>
      {resumeData.education.map((item, index) => (
        <div key={index} className={getSpacingClasses(template, 'itemGap')}>
          {item.degree && (
            <p className={`${getTypographyClasses(template, 'content')} i-bold`}>
              {item.degree}
            </p>
          )}
          {item.school && (
            <p className={getTypographyClasses(template, 'content')}>
              {item.school}
            </p>
          )}
          <DateRange
            startYear={item.startYear}
            endYear={item.endYear}
            id={`education-start-end-date-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TemplateEducation;
