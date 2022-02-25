import { put, takeEvery, all, fork } from "redux-saga/effects";
import axios from "axios";
import { ADD_YEAR, GET_YEAR, GET_YEARS } from "./yearActionTypes";
import { addYearSuccess, getYearSuccess, getYearsSuccess } from "./yearAction";

function* addYear({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/year/add",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(addYearSuccess({}));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getYears({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/year/getAll",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getYearsSuccess(response["data"]["years"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}
function* getYear({ payload }) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8080/api/year/get",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: payload,
    });
    if (response["data"]["success"]) {
      yield put(getYearsSuccess(response["data"]["year"]));
    }
  } catch (error) {
    console.log(error);
    // yield put();
  }
}

export function* watchAddYear() {
  yield takeEvery(ADD_YEAR, addYear);
}
export function* watchGetYear() {
  yield takeEvery(GET_YEAR, getYear);
}
export function* watchGetYears() {
  yield takeEvery(GET_YEARS, getYears);
}
function* YearSaga() {
  yield all([fork(watchGetYear), fork(watchAddYear), fork(watchGetYears)]);
}

export default YearSaga;
