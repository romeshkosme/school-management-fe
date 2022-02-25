import React from "react";
import { Link } from "react-router-dom";

function ManageSection() {
  return (
    <div className="manageSection">
      <div className="manageSection_header flex justify-between p-2 px-4">
        <h1>Manage Section</h1>
        <Link
          to="/section/add"
          className="bg-green-600 text-white rounded-md px-4 py-1 cursor-pointer"
        >
          Add Section
        </Link>
      </div>
      <div className="managaSection_body">
        <div className="manageSection_table rounded-lg shadow-2xl divide-y divide-gray m-4">
          <div className="manageSection_table_header flex justify-around py-2">
            <span>
              <b>Section</b>
            </span>
          </div>
          <div className="manageSection_table_body py-1">
              {/* for loop */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageSection;
