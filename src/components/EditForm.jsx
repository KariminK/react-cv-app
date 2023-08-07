import SchoolForm from "./forms/SchoolForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
const EditForm = ({
  onPersonalInfoChange,
  onAddSchool,
  schoolNumber,
  onSchoolInfoChange,
}) => {
  let schoolForms = [];
  for (let i = 0; i < schoolNumber; i++) {
    schoolForms.push(
      <SchoolForm key={i} index={i} onSchoolInfoChange={onSchoolInfoChange} />
    );
  }
  return (
    <form>
      <PersonalInfoForm onPersonalInfoChange={onPersonalInfoChange} />
      <div className="educationalInfoForm">
        <button onClick={onAddSchool}>Add school</button>
        {schoolForms}
      </div>
    </form>
  );
};
export default EditForm;
