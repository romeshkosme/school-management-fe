import React from "react";
import { connect } from "react-redux";
import { onInputChange } from "../store/teacher/teacherAction";

function CreateTeacher(props) {
  return (
    <React.Fragment>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">Registration No.</label>
        <input
          type="number"
          className="form-control"
          id="registrationNo"
          value={props.teacher.registrationNo}
          onChange={(e) =>
            props.onInputChange("registrationNo", e.target.value)
          }
        />
        {props.user.role === "teacher" && props.simpleValidator.current.message(
          "registrationNo",
          props.teacher.registrationNo,
          "required"
        )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="dateOfJoining">Date of Joining</label>
        <input
          type="date"
          className="form-control"
          id="dateOfJoining"
          value={props.teacher.dateOfJoining}
          onChange={(e) => props.onInputChange("dateOfJoining", e.target.value)}
        />
      </div>
      {props.user.role === "teacher" && props.simpleValidator.current.message(
          "dateOfJoining",
          props.teacher.dateOfJoining,
          "required"
        )}
      <div className="form-group input-field-group m-2">
        <label htmlFor="dateOfLeaving">Date of Leaving</label>
        <input
          type="date"
          className="form-control"
          id="dateOfLeaving"
          value={props.teacher.dateOfLeaving}
          onChange={(e) =>
            props.onInputChange("dateOfLeaveing", e.target.value)
          }
        />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    teacher: state.teacher,
    user: state.user,
  };
};
export default connect(mapStateToProps, { onInputChange })(CreateTeacher);
