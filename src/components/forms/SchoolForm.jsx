const SchoolForm = ({ onSchoolInfoChange, index }) => {
  return (
    <div className="schoolForm">
      <p>
        School name:{" "}
        <input
          type="text"
          name="name"
          className="schoolName"
          onChange={(e) => {
            onSchoolInfoChange(e, index, "name");
          }}
        />
      </p>
      <p>
        School level:{" "}
        <input
          type="text"
          name="level"
          className="schoolLevel"
          onChange={(e) => {
            onSchoolInfoChange(e, index, "level");
          }}
        />
      </p>
      <p>
        Start time:{" "}
        <input
          type="date"
          name="schoolStartTime"
          className="schoolStartTime"
          onChange={(e) => {
            onSchoolInfoChange(e, index, "startTime");
          }}
        />
      </p>
      <p>
        End time:{" "}
        <input
          type="date"
          name="schoolEndTime"
          className="schoolEndTime"
          onChange={(e) => {
            onSchoolInfoChange(e, index, "endTime");
          }}
        />
      </p>
    </div>
  );
};
export default SchoolForm;
