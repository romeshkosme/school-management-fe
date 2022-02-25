import React, { useState } from "react";
import Logo from "../assets/images/rocket.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const [manage, SetManage] = useState(false);
  return (
    <div className="header border-b-2">
      <div className="header-content">
        <div className="header-content-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="header-content-menu">
          <ul className="header-content-menu-items">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li
              className="manage"
              onMouseEnter={() => SetManage(true)}
              onMouseLeave={() => SetManage(false)}
            >
              Manage
              {manage && (
                <div className="subMenu manage_subMenu shadow-2xl">
                  <ul className="px-4 py-2">
                    <li className="py-1">
                      <Link to="/manage/student">Student</Link>
                    </li>
                    <li className="py-1">
                      <Link to="/manage/teacher">Teacher</Link>
                    </li>
                    <li className="py-1">
                      <Link to="/manage/admin">Admin</Link>
                    </li>
                    <li className="py-1">
                      <Link to="/manage/class">Class</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>Subscription</li>
          </ul>
        </div>
        <div className="header-content-right-menu">
          <ul className="flex">
            <li>
              <Link to="/user/add">Add User</Link>
            </li>
            <li>Setting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const user = state.user;
  return { user };
};

export default connect(mapStateToProps)(Header);
