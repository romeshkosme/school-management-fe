import { LOGIN, LOGIN_FAILED } from "./authActionTypes";

export const login = (payload) => {
    console.log("action called", payload)
  return {
    type: LOGIN,
    payload,
  };
};

export const loginFailed = (payload) => {
    return {
        type: LOGIN_FAILED,
        payload,
    };
}