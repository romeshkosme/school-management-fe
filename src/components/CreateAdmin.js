import React from "react";
import { connect } from "react-redux";
import { onInputChange } from "../store/admin/adminAction";

function CreateAdmin(props) {
  return (
    <React.Fragment>
      <div className="form-group input-field-group m-2">
        <label htmlFor="name">Registration No.</label>
        <input
          type="number"
          className="form-control"
          id="registrationNo"
          value={props.admin.registrationNo}
          onChange={(e) =>
            props.onInputChange("registrationNo", e.target.value)
          }
        />
        {props.user.role === "admin" && props.simpleValidator.current.message(
          "registrationNo",
          props.admin.registrationNo,
          "required"
        )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="dateOfJoining">Date of Joining</label>
        <input
          type="date"
          className="form-control"
          id="dateOfJoining"
          value={props.admin.dateOfJoining}
          onChange={(e) => props.onInputChange("dateOfJoining", e.target.value)}
        />
      </div>
      {props.user.role === "admin" && props.simpleValidator.current.message(
        "dateOfJoining",
        props.admin.dateOfJoining,
        "required"
      )}
      <div className="form-group input-field-group m-2">
        <label htmlFor="dateOfLeaving">Date of Leaving</label>
        <input
          type="date"
          className="form-control"
          id="dateOfLeaving"
          value={props.admin.dateOfLeaving}
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
    admin: state.admin,
    user: state.user,
  };
};
export default connect(mapStateToProps, { onInputChange })(CreateAdmin);
