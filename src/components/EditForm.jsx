const EditForm = ({
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onCountryChange,
  onAddSchool,
}) => {
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
      </div>
    </form>
  );
};
export default EditForm;
