import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { GET_TEACHER, GET_TEACHERS } from "./teacherActionTypes";
import { getTeachersSuccess, getTeacherSuccess } from "./teacherAction";

function* getTeachers({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/teacher/getAll",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getTeachersSuccess(response["data"]["teachers"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getTeacher({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/teacher/get",
      headers: { "Access-Control-Allow-Origin": "*" },
      //   data: payload,
    });
    console.log("response[data]", response["data"]);
    if (response["data"]["success"]) {
      // yield put(getStudentsSuccess(response["data"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* watchGetTeachers() {
  yield takeEvery(GET_TEACHERS, getTeachers);
}
export function* watchGetTeacher() {
  yield takeEvery(GET_TEACHER, getTeacher);
}
function* TeacherSaga() {
  yield all([fork(watchGetTeachers)]);
}

export default TeacherSaga;
