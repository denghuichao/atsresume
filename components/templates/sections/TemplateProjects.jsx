import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import DateRange from '../../utility/DateRange';

// Dynamic imports for drag and drop
const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const TemplateProjects = ({ template, resumeData }) => {
  const { styles } = template;

  if (!resumeData.projects || resumeData.projects.length === 0 || 
      !resumeData.projects.some(item => item.name || item.description)) {
    return null;
  }

  return (
    <Droppable droppableId="projects" type="PROJECTS">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <h2
            className={`${styles.typography.sectionTitle} editable`}
            style={{ 
              color: styles.colors.primary,
              borderColor: styles.colors.border 
            }}
            contentEditable
            suppressContentEditableWarning
          >
            Projects
          </h2>
          {resumeData.projects.map((item, index) => (
            <Draggable
              key={`${item.name}-${index}`}
              draggableId={`PROJECTS-${index}`}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`${styles.spacing.itemGap} ${
                    snapshot.isDragging &&
                    "outline-dashed outline-2 outline-gray-400 bg-white"
                  }`}
                >
                  <div className="flex flex-row justify-between space-y-1">
                    <p 
                      className={`${styles.typography.content} i-bold`}
                      style={{ color: styles.colors.text }}
                    >
                      {item.name}
                    </p>
                    <DateRange
                      startYear={item.startYear}
                      endYear={item.endYear}
                      id={`project-start-end-date-${index}`}
                    />
                  </div>
                 
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.typography.content}
                      style={{ color: styles.colors.primary }}
                    >
                      {item.link}
                    </Link>
                  )}
                  {item.description && (
                    <p 
                      className={styles.typography.content}
                      style={{ color: styles.colors.text }}
                    >
                      {item.description}
                    </p>
                  )}
                  <Droppable
                    droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                    type="PROJECTS_KEY_ACHIEVEMENT"
                  >
                    {(provided) => (
                      <ul
                        className={`list-disc ul-padding ${styles.typography.content}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {typeof item.keyAchievements === "string" &&
                          item.keyAchievements
                            .split("\n")
                            .map((achievement, subIndex) => (
                              <Draggable
                                key={`${item.name}-${index}-${subIndex}`}
                                draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                index={subIndex}
                              >
                                {(provided, snapshot) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`
                                hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                ${
                                  snapshot.isDragging &&
                                  "outline-dashed outline-2 outline-gray-400 bg-white"
                                }`}
                                    style={{ color: styles.colors.text }}
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

export default TemplateProjects;
