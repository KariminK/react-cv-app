import EditButton from "./partials/EditButton";
import InfoList from "./partials/InfoList";

const info = {
  name: "Karimin",
  email: "xyz@gmail.com",
  country: "Poland",
};
const PersonalInfo = () => {
  const edit = () => {
    alert("xzy");
  };
  return (
    <div className="personalInfo-section">
      <h2>Basic info:</h2>
      <InfoList info={info} />
      <EditButton handleClick={edit} />
    </div>
  );
};
export default PersonalInfo;
