import "../../styles/workplaceForm.css";
const WorkplaceForm = ({
  onWorkplaceInfoChange,
  index,
  onResponsibilitiesChange,
}) => {
  return (
    <div className="workplaceForm">
      <p>
        Workplace name:{" "}
        <input
          type="text"
          name="workplaceName"
          className="workplaceName"
          onChange={(e) => onWorkplaceInfoChange(e, index, "name")}
        />
      </p>
      <p>
        Position name:{" "}
        <input
          type="text"
          name="positionName"
          className="positionName"
          onChange={(e) => onWorkplaceInfoChange(e, index, "position")}
        />
      </p>
      <p>
        Responsibilities &#40;separate
        <br />
        with a comma and a space&#41;
        <textarea
          name="responsibilities"
          className="responsibilities"
          cols="30"
          rows="3"
          onChange={(e) => onResponsibilitiesChange(e, index)}
        ></textarea>
      </p>
      <p>
        Start time:{" "}
        <input
          type="date"
          name="workplaceStartTime"
          className="workplaceTime workplaceStartTime"
          onChange={(e) => onWorkplaceInfoChange(e, index, "startTime")}
        />
      </p>
      <p>
        End time:{" "}
        <input
          type="date"
          name="workplaceStartTime"
          className="workplaceTime workplaceEndTime"
          onChange={(e) => onWorkplaceInfoChange(e, index, "endTime")}
        />
      </p>
    </div>
  );
};
export default WorkplaceForm;
