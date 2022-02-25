import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
// import { setUser } from "../user/userAction";
import { LOGIN, LOGIN_FAILED } from "./authActionTypes";


function* login({payload}) {
  try {
      console.log("login saga", payload)
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/user/login",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    console.log("login saga response", response)
    if (response.data.success) {
      // yield put(setUser(response.data.response.accessToken));
    } else {
    //   yield put({ type: "LOGIN_FAILED", message: response.message });
    }
  } catch (error) {
      console.log("error", error);
    yield put({ type: "LOGIN_FAILED", message: error.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* watchLogin() {
    yield takeEvery(LOGIN, login)
}
function* AuthSaga() {
  yield all([fork(watchLogin)]);
}

export default AuthSaga;
