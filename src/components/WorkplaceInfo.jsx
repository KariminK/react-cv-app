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
      <ul>
        {info.map((element, i) => {
          return (
            <li key={i}>
              <h3>{element.name.length != 0 ? element.name : "No name"}</h3>
              <p>Position: {element.position}</p>
              <p>
                Responsibilities:{" "}
                {typeof element.responsibilities == "object"
                  ? element.responsibilities.map((element, i) => {
                      return <li key={i}>{element}</li>;
                    })
                  : element.responsibilities}
              </p>
              <p>Start time: {element.startTime}</p>
              <p>Start time: {element.endTime}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WorkplaceInfo;
