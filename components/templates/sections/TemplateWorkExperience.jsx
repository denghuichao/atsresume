import React from 'react';
import dynamic from 'next/dynamic';
import DateRange from '../../utility/DateRange';
import { getSectionTitleClasses, getTypographyClasses, getSpacingClasses, getDragClasses } from '../templateUtils';

// Dynamic imports for drag and drop
const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const TemplateWorkExperience = ({ template, resumeData }) => {
  if (!resumeData.workExperience || resumeData.workExperience.length === 0 || 
      !resumeData.workExperience.some(item => item.company || item.position)) {
    return null;
  }

  return (
    <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <h2
            className={getSectionTitleClasses(template)}
            contentEditable
            suppressContentEditableWarning
          >
            Work Experience
          </h2>
          {resumeData.workExperience.map((item, index) => (
            <Draggable
              key={`${item.company}-${index}`}
              draggableId={`WORK_EXPERIENCE-${index}`}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={getDragClasses(snapshot.isDragging, getSpacingClasses(template, 'itemGap'))}
                >
                  <div className="flex flex-row justify-between space-y-1">
                    <p className={`${getTypographyClasses(template, 'content')} i-bold`}>
                      {item.company}
                    </p>
                    <DateRange
                      startYear={item.startYear}
                      endYear={item.endYear}
                      id={`work-experience-start-end-date-${index}`}
                    />
                  </div>
                  {item.position && (
                    <p className={getTypographyClasses(template, 'content')}>
                      {item.position}
                    </p>
                  )}
                  {item.description && (
                    <p className={`${getTypographyClasses(template, 'content')} hyphens-auto`}>
                      {item.description}
                    </p>
                  )}
                  <Droppable
                    droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                    type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                  >
                    {(provided) => (
                      <ul
                        className={`list-disc ul-padding ${getTypographyClasses(template, 'content')}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {typeof item.keyAchievements === "string" &&
                          item.keyAchievements
                            .split("\n")
                            .map((achievement, subIndex) => (
                              <Draggable
                                key={`${item.company}-${index}-${subIndex}`}
                                draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                index={subIndex}
                              >
                                {(provided, snapshot) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={getDragClasses(
                                      snapshot.isDragging,
                                      'hover:outline-dashed hover:outline-2 hover:outline-gray-400 template-content'
                                    )}
                                  >
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: achievement,
                                      }}
                                      contentEditable
                                    />
                                  </li>
                                )}
                              </Draggable>
                            ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TemplateWorkExperience;
