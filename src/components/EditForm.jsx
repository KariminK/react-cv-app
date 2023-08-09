import SchoolForm from "./forms/SchoolForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkplaceForm from "./forms/WorkplaceForm";
import "../styles/editform.css";
const EditForm = ({
  onPersonalInfoChange,
  onAddSchool,
  schoolNumber,
  onSchoolInfoChange,
  onAddWorkspace,
  workplaceNumber,
  onWorkplaceInfoChange,
  onResponsibilitiesChange,
  onRemoveSchool,
  onRemoveWorkspace,
}) => {
  let schoolForms = [];
  for (let i = 0; i < schoolNumber; i++) {
    schoolForms.push(
      <SchoolForm key={i} index={i} onSchoolInfoChange={onSchoolInfoChange} />
    );
  }
  let workplaceForms = [];
  for (let i = 0; i < workplaceNumber; i++) {
    workplaceForms.push(
      <WorkplaceForm
        key={i}
        index={i}
        onWorkplaceInfoChange={onWorkplaceInfoChange}
        onResponsibilitiesChange={onResponsibilitiesChange}
      />
    );
  }
  return (
    <form>
      <PersonalInfoForm onPersonalInfoChange={onPersonalInfoChange} />
      <div className="educationalInfoForm">
        <button onClick={onAddSchool}>Add school</button>
        <button onClick={onRemoveSchool}>Remove school</button>
        <div className="schoolForms">{schoolForms}</div>
      </div>
      <div className="workplaceInfoForm">
        <button onClick={onAddWorkspace}>Add workplace</button>
        <button onClick={onRemoveWorkspace}>Remove workplace</button>
        <div className="workplaceForms">{workplaceForms}</div>
      </div>
    </form>
  );
};
export default EditForm;
