import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
import defaultInfo from "./defaultInfo";
import EditForm from "./components/EditForm";
import Education from "./components/Education";
import WorkplaceInfo from "./components/WorkplaceInfo";
class School {
  constructor() {
    this.name = "No name";
    this.level = null;
    this.startTime = null;
    this.endTime = null;
  }
}
class Workplace {
  constructor() {
    this.name = "No name";
    this.position = null;
    this.responsibilities = "";
    this.startTime = null;
    this.endTime = null;
  }
}
function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo.personalInfo);
  const [educationalInfo, setEducationalInfo] = useState(defaultInfo.education);
  const [workplaceInfo, setWorkplaceInfo] = useState(defaultInfo.workplace);
  const [schoolNumber, setSchoolNumber] = useState(0);
  const [workplaceNumber, setWorkplaceNumber] = useState(0);
  const handlePersonalInfoChange = (e, prop) => {
    setPersonalInfo({ ...personalInfo, [prop]: e.target.value });
  };
  const handleAddSchool = (e) => {
    e.preventDefault();
    setSchoolNumber(schoolNumber + 1);
    const newEducationalInfo = JSON.parse(JSON.stringify(educationalInfo));
    newEducationalInfo.push(new School());
    setEducationalInfo(newEducationalInfo);
  };
  const handleAddWorkplace = (e) => {
    e.preventDefault();
    setWorkplaceNumber(workplaceNumber + 1);
    const newWorkplaceInfo = JSON.parse(JSON.stringify(workplaceInfo));
    newWorkplaceInfo.push(new Workplace());
    setWorkplaceInfo(newWorkplaceInfo);
  };
  const handleSchoolInfoChange = (e, index, prop) => {
    const newEducationalInfo = JSON.parse(JSON.stringify(educationalInfo));
    newEducationalInfo[index][prop] = e.target.value;
    setEducationalInfo(newEducationalInfo);
  };
  const handleWorkplaceInfoChange = (e, index, prop) => {
    const newWorkplaceInfo = JSON.parse(JSON.stringify(workplaceInfo));
    newWorkplaceInfo[index][prop] = e.target.value;
    setWorkplaceInfo(newWorkplaceInfo);
  };
  const handleResponsibilitiesChange = (e, index) => {
    const newWorkplaceInfo = JSON.parse(JSON.stringify(workplaceInfo));
    if (!e.target.value) {
      newWorkplaceInfo[index].responsibilities = "No responsibilities to show";
    } else if (e.target.value.includes(", ")) {
      newWorkplaceInfo[index].responsibilities = e.target.value.split(", ");
      console.log(newWorkplaceInfo[index].responsibilities);
    } else {
      newWorkplaceInfo[index].responsibilities = e.target.value;
    }
    setWorkplaceInfo(newWorkplaceInfo);
  };
  return (
    <>
      <EditForm
        onPersonalInfoChange={handlePersonalInfoChange}
        schoolNumber={schoolNumber}
        onAddSchool={handleAddSchool}
        onSchoolInfoChange={handleSchoolInfoChange}
        workplaceNumber={workplaceNumber}
        onAddWorkspace={handleAddWorkplace}
        onWorkplaceInfoChange={handleWorkplaceInfoChange}
        onResponsibilitiesChange={handleResponsibilitiesChange}
      />
      <h1>My CV:</h1>
      <PersonalInfo info={personalInfo} />
      <Education info={educationalInfo} />
      <WorkplaceInfo info={workplaceInfo} />
    </>
  );
}

export default App;
