import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { ADD_USER, GET_USER } from "./userActionTypes";
import { addUserSuccess, getUserSuccess } from "./userAction";
import { getStudentSuccess } from "../student/studentAction";
import { getAddressSuccess } from "../address/addressAction";
import { getTeacherSuccess } from "../teacher/teacherAction";
import { getAdminSuccess } from "../admin/adminAction";

function* addUser({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/user/add",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(addUserSuccess());
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getUser({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/user/get",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getUserSuccess(response["data"]["user"]));
      yield put(getAddressSuccess(response["data"]["user"]["address"]));
      if (response["data"]["user"]["role"] === "student") {
        yield put(getStudentSuccess(response["data"]["user"]["student"]));
      } else if (response["data"]["user"]["role"] === "teacher") {
        yield put(getTeacherSuccess(response["data"]["user"]["teacher"]));
      } else if (response["data"]["user"]["role"] === "admin") {
        yield put(getAdminSuccess(response["data"]["user"]["admin"]));
      }
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
export function* watchAddUser() {
  yield takeEvery(ADD_USER, addUser);
}
export function* watchGetUser() {
  yield takeEvery(GET_USER, getUser);
}
function* UserSaga() {
  yield all([fork(watchAddUser), fork(watchGetUser)]);
}

export default UserSaga;
