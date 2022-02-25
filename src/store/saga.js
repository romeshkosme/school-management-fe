import AuthSaga from "./auth/authSaga";
import UserSaga from "./user/userSaga";
import StudentSaga from "./student/studentSaga";
import TeacherSaga from "./teacher/teacherSaga";
import AdminSaga from "./admin/adminSaga";
import ClassSaga from "./class/classSaga";
import YearSaga from "./year/yearSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    UserSaga(),
    StudentSaga(),
    TeacherSaga(),
    AdminSaga(),
    ClassSaga(),
    YearSaga(),
  ]);
}
