import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import CreateStudent from "./components/CreateStudent";
import { firebaseConfig } from "./config/firebase-config";
import { initFirebaseBackend } from "./helpers/authUtils";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CreateUser from "./components/CreateUser";
import TeacherList from "./components/TeacherList";
import AdminList from "./components/AdminList";
import ManageClass from "./components/ManageClass";
import CreateClass from "./components/CreateClass";
import CreateSection from "./components/CreateSection";
import CreateYear from "./components/CreateYear";

initFirebaseBackend(firebaseConfig);

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) setIsAuthenticated(true);
  }, []);
  useEffect(() => {
    if (props.user && props.user.token) setIsAuthenticated(true);
  }, [props.user, props.user.token]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
            }
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/manage/student"
            element={
              isAuthenticated ? (
                <Dashboard component={<StudentList />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/manage/teacher"
            element={
              isAuthenticated ? (
                <Dashboard component={<TeacherList />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/manage/admin"
            element={
              isAuthenticated ? (
                <Dashboard component={<AdminList />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/create-student"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateStudent />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/user/add"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateUser />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/user/edit/:id"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateUser />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/manage/class"
            element={
              isAuthenticated ? (
                <Dashboard component={<ManageClass />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/class/add"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateClass />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="manage/class/section/:class_id"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateSection />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="manage/create-year"
            element={
              isAuthenticated ? (
                <Dashboard component={<CreateYear />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  const user = state.user;
  return { user };
};
export default connect(mapStateToProps)(App);
