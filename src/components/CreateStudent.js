import React from "react";
import { connect } from "react-redux";
import { onInputChange } from "../store/student/studentAction";

function CreateStudent(props) {
  return (
    <React.Fragment>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">Registration No.</label>
        <input
          type="number"
          className="form-control"
          id="registrationNo"
          value={props.student.registrationNo}
          onChange={(e) =>
            props.onInputChange("registrationNo", e.target.value)
          }
        />
        {props.user.role === "student" &&
          props.simpleValidator.current.message(
            "registrationNo",
            props.student.registrationNo,
            "required"
          )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">
          Gaurdian Name<small>(Required)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="gaurdianName"
          value={props.student.gaurdianName}
          onChange={(e) => props.onInputChange("gaurdianName", e.target.value)}
        />
        {props.user.role === "student" &&
          props.simpleValidator.current.message(
            "gaurdianName",
            props.student.gaurdianName,
            "required"
          )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">Alternate Email</label>
        <input
          type="email"
          className="form-control"
          id="alternateEmail"
          value={props.student.alternateEmail}
          onChange={(e) =>
            props.onInputChange("alternateEmail", e.target.value)
          }
        />
        {props.user.role === "student" &&
          props.simpleValidator.current.message(
            "alternateEmail",
            props.student.alternateEmail,
            "email"
          )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">
          Date of Admission<small>(Required)</small>
        </label>
        <input
          type="date"
          className="form-control"
          id="dateOfAdmission"
          value={props.student.dateOfAdmission}
          onChange={(e) =>
            props.onInputChange("dateOfAdmission", e.target.value)
          }
        />
        {props.user.role === "student" &&
          props.simpleValidator.current.message(
            "dateOfAdmission",
            props.student.dateOfAdmission,
            "required"
          )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">TC Date</label>
        <input
          type="date"
          className="form-control"
          id="dateOfTc"
          value={props.student.dateOfTc}
          onChange={(e) => props.onInputChange("dateOfTc", e.target.value)}
        />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    user: state.user,
  };
};
// export default CreateStudent;
export default connect(mapStateToProps, { onInputChange })(CreateStudent);
