import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAdmins } from "../store/admin/adminAction";
import { Link } from "react-router-dom";

function AdminList(props) {
  useEffect(() => {
    props.getAdmins();
  }, []);
  return (
    <div className="admin_list">
      <div className="admin_list_header flex items-center p-4">
        <h1>Admin</h1>
        {/* <button className="admin_list-btn bg-cyan-500 rounded-md px-4 py-2 text-white">
          <Link to="/create-student">Add Student</Link>
        </button> */}
      </div>
      <div className="admin_list_table m-2 rounded-lg shadow-2xl">
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
          {props.admin &&
            props.admin.admins &&
            props.admin.admins.map((admin) => (
              <div
                className="admin-list-item px-2 py-2 flex justify-around"
                key={admin.registrationNo}
              >
                <span>
                  {admin.user.firstname} {admin.user.lastname}
                </span>
                <span>{admin.registrationNo}</span>
                <span>{admin.user.email}</span>
                <div>
                  <span className="py-1 cursor-pointer px-4 mx-1 bg-blue-500 rounded-lg text-white">
                    <Link to={`/user/edit/${admin.user._id}`}>Edit</Link>
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

const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, { getAdmins })(AdminList);
