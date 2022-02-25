import React from "react";
import Header from "./Header";

function Dashboard(props) {
  return (
    <div className="Dashboard h-screen">
      <Header />
      {props.component}
    </div>
  );
}

export default Dashboard;
