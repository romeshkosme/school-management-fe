import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { GET_STUDENTS, GET_STUDENT } from "./studentActionTypes";
import { getStudentsSuccess } from "./studentAction";

function* getStudents({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/student/getAll",
      headers: { "Access-Control-Allow-Origin": "*" },
        data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getStudentsSuccess(response["data"]["students"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getStudent({ payload }) {
  try {
    console.log("getstudent payload -- ", payload);
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/student/get",
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
export function* watchGetStudents() {
  yield takeEvery(GET_STUDENTS, getStudents);
}
export function* watchGetStudent() {
  yield takeEvery(GET_STUDENT, getStudent);
}
function* StudentSaga() {
  yield all([fork(watchGetStudents)]);
}

export default StudentSaga;
