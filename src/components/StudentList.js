import React, { useEffect, useState } from "react";
import { getStudents } from "../store/student/studentAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function StudentList(props) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    props.getStudents({});
  }, []);
  useEffect(() => {
    // props.getStudents({ search });
  }, [search]);
  return (
    <div className="student-list">
      <div className="student-list-header flex items-center p-4">
        <h1>Student</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Student"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="student-list-table m-2 rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 divide-y divide-gray">
          <div className="student-list-item flex justify-around p-4">
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
          {props.student.students.map((student) => (
            <div
              className="student-list-item px-2 py-2 flex justify-around"
              key={student.registrationNo}
            >
              <span>
                {student.user.firstname} {student.user.lastname}
              </span>
              <span>{student.registrationNo}</span>
              <span>{student.user.email}</span>
              <div>
                <span className="py-1 cursor-pointer px-4 mx-1 bg-blue-500 rounded-lg text-white">
                  <Link to={`/user/edit/${student.user._id}`}>Edit</Link>
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
    student: state.student,
  };
};
export default connect(mapStatetoProps, { getStudents })(StudentList);
