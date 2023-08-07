import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import defaultInfo from "./defaultInfo";
import EditForm from "./components/EditForm";
import Education from "./components/Education";
function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo.personalInfo);
  const [educationalInfo, setEducationalInfo] = useState(defaultInfo.education);
  const [schoolNumber, setSchoolNumber] = useState(1);
  const handleNameChange = (e) => {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  };
  const handleMailChange = (e) => {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setPersonalInfo({ ...personalInfo, phone: e.target.value });
  };
  const handleCountryChange = (e) => {
    setPersonalInfo({ ...personalInfo, country: e.target.value });
  };
  const handleAddSchool = (e) => {
    e.preventDefault();
    setSchoolNumber(schoolNumber + 1);
  };
  return (
    <>
      <EditForm
        onNameChange={handleNameChange}
        onEmailChange={handleMailChange}
        onCountryChange={handleCountryChange}
        onPhoneChange={handlePhoneChange}
        schoolNumber={schoolNumber}
        onAddSchool={handleAddSchool}
      />
      <h1>My CV:</h1>
      <PersonalInfo info={personalInfo} />
      <Education info={educationalInfo} />
    </>
  );
}

export default App;
