import SchoolForm from "./forms/SchoolForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkplaceForm from "./forms/WorkplaceForm";
import { v4 as uuidv4 } from "uuid";
const EditForm = ({
  onPersonalInfoChange,
  onAddSchool,
  schoolNumber,
  onSchoolInfoChange,
  onAddWorkspace,
  workplaceNumber,
  onWorkplaceInfoChange,
  onResponsibilitiesChange,
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
        {schoolForms}
      </div>
      <div className="workplaceInfoForm">
        <button onClick={onAddWorkspace}>Add workplace</button>
        {workplaceForms}
      </div>
    </form>
  );
};
export default EditForm;
