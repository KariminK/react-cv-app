import EducationalInfoForm from "./educationalInfoForm";
const EditForm = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onCountryChange,
  onAddSchool,
  schoolNumber,
}) => {
  let schoolForms = [];
  for (let i = 0; i < schoolNumber; i++) {
    schoolForms.push(<EducationalInfoForm />);
  }
  return (
    <form>
      <div className="personalInfoForm">
        <p>
          Name:{" "}
          <input type="text" name="name" id="name" onChange={onNameChange} />
        </p>
        <p>
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            onChange={onEmailChange}
          />
        </p>
        <p>
          Phone number:{" "}
          <input type="tel" name="tel" id="tel" onChange={onPhoneChange} />
        </p>
        <p>
          Country:{" "}
          <input
            type="text"
            name="country"
            id="country"
            onChange={onCountryChange}
          />
        </p>
      </div>
      <div className="educationalInfoForm">
        <button onClick={onAddSchool}>Add school</button>
        {schoolForms}
      </div>
    </form>
  );
};
export default EditForm;
