import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { onInputChange, addClass } from "../store/class/classAction";
import SimpleReactValidator from "simple-react-validator";
import { getTeachers } from "../store/teacher/teacherAction";

function CreateClass(props) {
  const [, setState] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-sm text-right">{message}</div>,
    })
  );
  useEffect(() => {
    // get teachers()
    props.getTeachers({});
  }, []);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const payload = {};
      payload["standard"] = props.class.standard;
      // payload["section"] = props.class.section;
      // payload["year"] = props.class.year;
      // payload["teacher"] = props.class.teacher;
      props.addClass(payload);
    } else {
      simpleValidator.current.showMessages();
      setState({});
    }
  };
  return (
    <div className="createClass">
      <div className="createClass_header flex justify-between p-2 px-4">
        <h1>Create Class</h1>
      </div>
      <div className="createClass_body">
        <div className="createClass_form m-4">
          <form>
            <div className="flex flex-wrap">
              <div className="createClass_form_field flex flex-col m-2">
                <label htmlFor="standard">
                  Standard <small>Required</small>
                </label>
                <input
                  type="text"
                  id="standard"
                  value={props.class.standard ? props.class.standard : ""}
                  onChange={(e) =>
                    props.onInputChange("standard", e.target.value)
                  }
                />
                {simpleValidator.current.message(
                  "standard",
                  props.class.standard,
                  "required"
                )}
              </div>
              {/* <div className="createClass_form_field  flex flex-col m-2">
                <label htmlFor="section">
                  Section<small>Required</small>
                </label>
                <input
                  type="text"
                  id="section"
                  value={props.class.section ? props.class.section : ""}
                  onChange={(e) =>
                    props.onInputChange("section", e.target.value)
                  }
                />
              </div>
              <div className="createClass_form_field  flex flex-col m-2">
                <label htmlFor="classTeacher">
                  Teacher<small>Required</small>
                </label>
                <select
                  id="teacher"
                  value={props.class.teacher}
                  onChange={(e) =>
                    props.onInputChange("teacher", e.target.value)
                  }
                >
                  <option value="">Select Teacher</option>
                  {props.teacher.teachers &&
                    props.teacher.teachers.map((teacher) => (
                      <option key={teacher._id} value={teacher._id}>
                        {teacher.user.firstname} {teacher.user.lastname}
                      </option>
                    ))}
                </select>
              </div>
              <div className="createClass_form_field  flex flex-col m-2">
                <label htmlFor="year">
                  Year<small>Required</small>
                </label>
                <select
                  id="year"
                  name="year"
                  value={props.class.year ? props.class.year : ""}
                  onChange={(e) => props.onInputChange("year", e.target.value)}
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {simpleValidator.current.message(
                  "year",
                  props.class.year,
                  "required"
                )}
              </div> */}
            </div>
            <div className="createClass_form_field w-full text-center">
              <button
                className="bg-green-600 text-white rounded-md px-4 py-1"
                onClick={onHandleSubmit}
              >
                Create Class
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    class: state.class,
    teacher: state.teacher,
  };
};
export default connect(mapStateToProps, {
  onInputChange,
  getTeachers,
  addClass,
})(CreateClass);
