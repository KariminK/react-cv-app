const PersonalInfo = ({ info }) => {
  return (
    <div className="personalInfo-section">
      <h2>Basic info:</h2>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Phone number: {info.phone}</p>
      <p>Country: {info.country}</p>
    </div>
  );
};
export default PersonalInfo;
