import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getClasses } from "../store/class/classAction";
import { connect } from "react-redux";

function ManageClass(props) {
  useEffect(() => {
    props.getClasses({});
  }, []);
  return (
    <div className="manageClass">
      <div className="manageClass_header flex justify-between p-2 px-4">
        <h1>Manage Class</h1>
        <Link
          to="/class/add"
          className="bg-green-600 text-white rounded-md px-4 py-1 cursor-pointer"
        >
          Add Class
        </Link>
      </div>
      <div className="manageClass_body">
        <div className="manageClass_table rounded-lg shadow-2xl divide-y divide-gray m-4">
          <div className="manageClass_table_header flex justify-around py-2">
            <span>
              <b>Standard</b>
            </span>
            <span>
              <b>Section</b>
            </span>
            <span>
              <b>Year</b>
            </span>
          </div>
          <div className="manageClass_table_body py-1">
            {props.class.classes &&
              props.class.classes.map((classItem) => (
                <div key={classItem.createdAt} className="flex justify-around">
                  <span>{classItem.standard}</span>
                  <span>
                    <Link to={`/manage/class/section/${classItem._id}`}>
                      Manage Section
                    </Link>
                  </span>
                  <span>
                    <Link to={`/manage/class/year/${classItem._id}`}>
                      Manage Year
                    </Link>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    class: state.class,
  };
};
export default connect(mapStateToProps, { getClasses })(ManageClass);
