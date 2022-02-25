import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_CLASS,
  GET_CLASS,
  GET_CLASSES,
} from "./classActionTypes";
import {
  addClassSuccess,
  getClassesSuccess,
} from "./classAction";

function* addClass({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/class/add",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(addClassSuccess());
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

function* getClasses({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/class/getAll",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getClassesSuccess(response["data"]["classes"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchAddClass() {
  yield takeEvery(ADD_CLASS, addClass);
}
export function* watchGetClasses() {
  yield takeEvery(GET_CLASSES, getClasses);
}
function* ClassSaga() {
  yield all([
    fork(watchAddClass),
    fork(watchGetClasses),
  ]);
}

export default ClassSaga;
