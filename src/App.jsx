import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>My CV:</h1>
      <PersonalInfo />
    </>
  );
}

export default App;
