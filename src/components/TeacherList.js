import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTeachers } from "../store/teacher/teacherAction";
import { Link } from "react-router-dom";

function TeacherList(props) {
  useEffect(() => {
    props.getTeachers({});
  }, []);
  return (
    <div className="teacher_list">
      <div className="teacher_list_header flex items-center p-4">
        <h1>Teacher</h1>
        {/* <button className="student-list-btn bg-cyan-500 rounded-md px-4 py-2 text-white">
          <Link to="/create-student">Add Student</Link>
        </button> */}
      </div>
      <div className="teacher_list_table m-2 rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 divide-y divide-gray">
          <div className="teacher-list-item flex justify-around p-4">
            <span>
              <b>Name</b>
            </span>
            <span>
              <b>Registration Number</b>
            </span>
            <span>
              <b>Email</b>
            </span>
            <span>
              <b>Action</b>
            </span>
          </div>
          {props.teacher &&
            props.teacher.teachers &&
            props.teacher.teachers.map((teacher) => (
              <div
                className="teacher-list-item px-2 py-2 flex justify-around"
                key={teacher.registrationNo}
              >
                <span>{teacher.user.firstname}</span>
                <span>{teacher.registrationNo}</span>
                <span>{teacher.user.email}</span>
                <div>
                  <span className="py-1 cursor-pointer px-4 mx-1 bg-blue-500 rounded-lg text-white">
                    <Link to={`/user/edit/${teacher.user._id}`}>Edit</Link>
                  </span>
                  <span className="py-1 cursor-pointer px-4 mx-1 bg-green-600 rounded-lg text-white">
                    View Attendance
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    teacher: state.teacher,
  };
};
export default connect(mapStatetoProps, { getTeachers })(TeacherList);
