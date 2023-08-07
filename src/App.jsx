import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import defaultInfo from "./defaultInfo";
import EditForm from "./components/EditForm";
import Education from "./components/Education";
class School {
  constructor() {
    this.name = "No name";
    this.level = null;
    this.startTime = null;
    this.endTime = null;
  }
}
function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo.personalInfo);
  const [educationalInfo, setEducationalInfo] = useState(defaultInfo.education);
  const [schoolNumber, setSchoolNumber] = useState(0);
  const handlePersonalInfoChange = (e, prop) => {
    setPersonalInfo({ ...personalInfo, [prop]: e.target.value });
  };
  const handleAddSchool = (e) => {
    e.preventDefault();
    setSchoolNumber(schoolNumber + 1);
    const newEducationalInfo = [...educationalInfo];
    newEducationalInfo.push(new School());
    setEducationalInfo(newEducationalInfo);
  };
  const handleSchoolInfoChange = (e, i, prop) => {
    const newEducationalInfo = [...educationalInfo];
    newEducationalInfo[i][prop] = e.target.value;
    setEducationalInfo(newEducationalInfo);
  };
  return (
    <>
      <EditForm
        onPersonalInfoChange={handlePersonalInfoChange}
        schoolNumber={schoolNumber}
        onAddSchool={handleAddSchool}
        onSchoolInfoChange={handleSchoolInfoChange}
      />
      <h1>My CV:</h1>
      <PersonalInfo info={personalInfo} />
      <Education info={educationalInfo} />
    </>
  );
}

export default App;
