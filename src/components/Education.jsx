import "../styles/education.css";
const Education = ({ info }) => {
  return (
    <div className="Education-section">
      <h2>Education:</h2>
      <ul>
        {info.map((element, i) => {
          return (
            <li key={i}>
              <h3>{element.name.length != 0 ? element.name : "No name"}</h3>
              <p>Level: {element.level}</p>
              <p>Start time: {element.startTime}</p>
              <p>End time: {element.endTime}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Education;
