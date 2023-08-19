import "../styles/personalInfo.css";
const PersonalInfo = ({ info }) => {
  return (
    <div className="personalInfo-section">
      <h2>Basic info:</h2>
      <ul>
        <li>Name: {info.name}</li>
        <li>Email: {info.email}</li>
        <li>Phone number: {info.phone}</li>
        <li>Country: {info.country}</li>
      </ul>
    </div>
  );
};
export default PersonalInfo;
