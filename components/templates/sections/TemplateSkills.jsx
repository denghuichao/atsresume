import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { ResumeContext } from '../../../pages/builder';

// Dynamic imports for drag and drop
const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const SkillItem = ({ template, title, skills }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { styles } = template;

  const handleTitleChange = (e) => {
    const newSkills = [...resumeData.skills];
    newSkills.find((skillType) => skillType.title === title).title = e.target.innerText;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <>
      <h2 
        className={`${styles.typography.sectionTitle} editable`}
        style={{ 
          color: styles.colors.primary,
          borderColor: styles.colors.border 
        }}
        contentEditable 
        suppressContentEditableWarning 
        onBlur={handleTitleChange}
      >
        {title}
      </h2>
      <p 
        className={styles.typography.subContent}
        style={{ color: styles.colors.text }}
      >
        {skills.join(", ")}
      </p>
    </>
  );
};

const TemplateSkills = ({ template, resumeData }) => {
  const { styles } = template;

  if (!resumeData.skills || resumeData.skills.length === 0) {
    return null;
  }

  return (
    <Droppable droppableId="skills" type="SKILLS">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {resumeData.skills.map((skill, index) => (
            <Draggable
              key={`SKILLS-${index}`}
              draggableId={`SKILLS-${index}`}
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
                  <SkillItem 
                    template={template}
                    title={skill.title} 
                    skills={skill.skills} 
                  />
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

export default TemplateSkills;
