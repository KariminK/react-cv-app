import "../styles/workplace.css";
const WorkplaceInfo = ({ info }) => {
  if (!info || info == []) {
    return (
      <div className="Workplace-section">
        <h2>Workplaces:</h2>
        <p>No workplaces to show</p>
      </div>
    );
  }
  return (
    <div className="Workplace-section">
      <h2>Workplaces:</h2>
      <ul className="workplace">
        {info.map((element, i) => {
          return (
            <li key={i}>
              <h3>{element.name.length != 0 ? element.name : "No name"}</h3>
              <ul className="workplace-details">
                <li>Position: {element.position}</li>
                <li>
                  Responsibilities:{" "}
                  <ul className="responsibilities-list">
                    {typeof element.responsibilities == "object"
                      ? element.responsibilities.map((element, i) => {
                          return <li key={i}>{element}</li>;
                        })
                      : element.responsibilities}
                  </ul>
                </li>
                <li>Start time: {element.startTime}</li>
                <li>Start time: {element.endTime}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WorkplaceInfo;
