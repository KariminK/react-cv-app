import "../../styles/personalInfoForm.css";
const PersonalInfoForm = ({ onPersonalInfoChange }) => {
  return (
    <div className="personalInfoForm">
      <h2>Your personal Info:</h2>
      <div className="personalFormInputs">
        <p>
          Name:{" "}
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              onPersonalInfoChange(e, "name");
            }}
          />
        </p>
        <p>
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              onPersonalInfoChange(e, "email");
            }}
          />
        </p>
        <p>
          Phone number:{" "}
          <input
            type="tel"
            name="tel"
            id="tel"
            onChange={(e) => {
              onPersonalInfoChange(e, "phone");
            }}
          />
        </p>
        <p>
          Country:{" "}
          <input
            type="text"
            name="country"
            id="country"
            onChange={(e) => {
              onPersonalInfoChange(e, "country");
            }}
          />
        </p>
      </div>
    </div>
  );
};
export default PersonalInfoForm;
