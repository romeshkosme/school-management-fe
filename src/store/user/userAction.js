import { ON_INPUT_CHANGE, ADD_USER, ADD_USER_SUCCESS, GET_USER, GET_USER_SUCCESS } from "./userActionTypes";

export const onInputChange = (key, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: { key, value },
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const addUserSuccess = () => {
  return {
    type: ADD_USER_SUCCESS,
  };
};

export const getUser = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
}

export const getUserSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
}