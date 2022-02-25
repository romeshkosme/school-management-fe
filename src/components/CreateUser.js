import React, { useState, useRef, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { onInputChange, addUser, getUser } from "../store/user/userAction";
import Address from "./Address";
import { role } from "../helpers/constants";
import CreateStudent from "./CreateStudent";
import CreateTeacher from "./CreateTeacher";
import CreateAdmin from "./CreateAdmin";
import { useParams } from "react-router-dom";

function CreateUser(props) {
  let [, setState] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-sm text-right">{message}</div>,
    })
  );
  const { id } = useParams();
  useEffect(() => {
    if (id) props.getUser({ id });
  }, []);
  useEffect(() => {
    simpleValidator.current.purgeFields();
  }, [props]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const payload = {};
      payload["user"] = {};
      payload["user"].firstname = props.user.firstname;
      payload["user"].lastname = props.user.lastname;
      payload["user"].email = props.user.email;
      payload["user"].primaryPhoneNumber = props.user.primaryPhoneNumber;
      payload["user"].alternatePhoneNumber = props.user.alternatePhoneNumber;
      payload["user"].role = props.user.role;
      payload["user"].password = props.user.password;
      payload["user"].photo_url = props.user.photo_url;
      payload["address"] = {};
      payload["address"].addressLine1 = props.address.addressLine1;
      payload["address"].addressLine2 = props.address.addressLine2;
      payload["address"].landmark = props.address.landmark;
      payload["address"].city = props.address.city;
      payload["address"].state = props.address.state;
      payload["address"].zip = props.address.zip;
      if (props.user.role === "student") {
        payload["student"] = {};
        payload["student"].gaurdianName = props.student.gaurdianName;
        payload["student"].registrationNo = props.student.registrationNo;
        payload["student"].dateOfAdmission = props.student.dateOfAdmission;
        payload["student"].dateOfTc = props.student.dateOfTc;
      } else if (props.user.role === "teacher") {
        payload["teacher"] = {};
        payload["teacher"].registrationNo = props.teacher.registrationNo;
        payload["teacher"].dateOfJoining = props.teacher.dateOfJoining;
        payload["teacher"].dateOfLeaving = props.teacher.dateOfLeaving;
      } else if (props.user.role === "admin") {
        payload["admin"] = {};
        payload["admin"].registrationNo = props.admin.registrationNo;
        payload["admin"].dateOfJoining = props.admin.dateOfJoining;
        payload["admin"].dateOfLeaving = props.admin.dateOfLeaving;
      }
      console.log("payload -- ", payload);
      // props.addUser(payload);
    } else {
      console.log("else");
      simpleValidator.current.showMessages();
      console.log(simpleValidator.current.errorMessages);
      setState({});
    }
  };
  return (
    <div className="create_user">
      <div className="create_user_header flex items-center p-4">
        <h1>{id ? `Edit` : `Create`} User</h1>
      </div>
      <div className="create_user_form p-4">
        <form className="w-full flex flex-wrap">
          <div className="form-group input-field-group m-2">
            <label htmlFor="firstname">
              First Name<small>(Required)</small>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={props.user.firstname}
              onChange={(e) => props.onInputChange("firstname", e.target.value)}
            />
            {simpleValidator.current.message(
              "firstname",
              props.user.firstname,
              "required"
            )}
          </div>
          <div className="form-group input-field-group m-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={props.user.lastname}
              onChange={(e) => props.onInputChange("lastname", e.target.value)}
            />
          </div>
          <div className="form-group input-field-group m-2">
            <label>Photo</label>
            <input type="file" className="form-control" />
          </div>
          <div className="form-group input-field-group m-2">
            <label htmlFor="primaryPhoneNumber">
              Phone Number<small>(Required)</small>
            </label>
            <input
              type="number"
              className="form-control"
              id="primaryPhoneNumber"
              name="primaryPhoneNumber"
              value={props.user.primaryPhoneNumber}
              onChange={(e) =>
                props.onInputChange("primaryPhoneNumber", e.target.value)
              }
            />
            {simpleValidator.current.message(
              "primaryPhoneNumber",
              props.user.primaryPhoneNumber,
              "required"
            )}
          </div>
          <div className="form-group input-field-group m-2">
            <label htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="alternatePhoneNumber"
              name="alternatePhoneNumber"
              value={props.user.alternatePhoneNumber}
              onChange={(e) =>
                props.onInputChange("alternatePhoneNumber", e.target.value)
              }
            />
          </div>
          <div className="form-group input-field-group m-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={props.user.email}
              onChange={(e) => props.onInputChange("email", e.target.value)}
            />
            {simpleValidator.current.message(
              "email",
              props.user.email,
              "email"
            )}
          </div>
          {/* ADDRESS */}
          <Address simpleValidator={simpleValidator} />
          <div className="form-group input-field-group m-2">
            <label htmlFor="role">Role</label>
            <select
              className="form-control"
              name="role"
              id="role"
              value={props.user.role}
              disabled={id ? true : false}
              onChange={(e) => props.onInputChange("role", e.target.value)}
            >
              <option value="" disabled>
                Select Role
              </option>
              {role.map((role) => {
                return (
                  <option value={role.value} key={role.value}>
                    {role.label}
                  </option>
                );
              })}
            </select>
            {simpleValidator.current.message("role", props.user.role, "role")}
          </div>
          {props.user && props.user.role === "student" && (
            <CreateStudent simpleValidator={simpleValidator} />
          )}
          {props.user && props.user.role === "admin" && (
            <CreateAdmin simpleValidator={simpleValidator} />
          )}
          {props.user && props.user.role === "teacher" && (
            <CreateTeacher simpleValidator={simpleValidator} />
          )}
        </form>
        <div className="text-center mt-4">
          <button
            className="student-list-btn bg-green-600 rounded-md px-4 py-2 text-white"
            onClick={handleSubmit}
          >
            {id ? "Update" : "Add"}{" "}
            {props.user && props.user.role
              ? `${
                  props.user.role.charAt(0).toUpperCase() +
                  props.user.role.substr(1).toLowerCase()
                }`
              : "User"}
          </button>
          {props.user && props.user.addUserSuccess && (
            <p>User added Successfully</p>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    student: state.student,
    teacher: state.teacher,
    admin: state.admin,
    address: state.address,
  };
};

export default connect(mapStateToProps, { onInputChange, addUser, getUser })(
  CreateUser
);
