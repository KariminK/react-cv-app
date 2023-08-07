const EducationalInfoForm = ({ onSchoolNameChange, onSchoolLevelChange }) => {
  let achievements = 0;
  const handleAddAchievement = () => {
    achievements++;
  };
  return (
    <div className="schoolForm">
      <p>
        School name: <input type="text" name="name" className="schoolName" />
      </p>
      <p>
        School level: <input type="text" name="level" className="schoolLevel" />
      </p>
    </div>
  );
};
