import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { GET_ADMIN, GET_ADMINS } from "./adminActionTypes";
import { getAdminSuccess, getAdminsSuccess } from "./adminAction";

function* getAdmins({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/admin/getAll",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getAdminsSuccess(response["data"]["admins"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getAdmin({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/admin/get",
      headers: { "Access-Control-Allow-Origin": "*" },
      //   data: payload,
    });
    console.log("response[data]", response["data"]);
    if (response["data"]["success"]) {
      yield put(getAdminSuccess(response["data"]["admin"]));
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
export function* watchGetAdmins() {
  yield takeEvery(GET_ADMINS, getAdmins);
}
export function* watchGetAdmin() {
  yield takeEvery(GET_ADMIN, getAdmin);
}
function* AdminSaga() {
  yield all([fork(watchGetAdmins)]);
}

export default AdminSaga;
