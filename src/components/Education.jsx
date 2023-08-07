const Education = ({ info }) => {
  return (
    <div className="Education-section">
      <h2>Education:</h2>
      <ul>
        {info.map((element, i) => {
          return (
            <li key={i}>
              <h3>{element.name}</h3>
              <p>Level: {element.level}</p>
              <p>Special achievements:</p>
              <ul>
                {element.specialAchievements.map((achievement, i) => {
                  return <li key={i}>{achievement}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Education;
