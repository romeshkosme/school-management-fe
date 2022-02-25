import { ON_INPUT_CHANGE, GET_ADMIN, GET_ADMINS, GET_ADMINS_SUCCESS, GET_ADMIN_SUCCESS } from "./adminActionTypes";

export const onInputChange = (key, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: { key, value },
  };
};

export const getAdmins = (payload) => {
  return {
    type: GET_ADMINS,
    payload,
  };
}

export const getAdminsSuccess = (payload) => {
  return {
    type: GET_ADMINS_SUCCESS,
    payload,
  };
}

export const getAdmin = (payload) => {
  return {
    type: GET_ADMIN,
    payload,
  };
}

export const getAdminSuccess = (payload) => {
  return {
    type: GET_ADMIN_SUCCESS,
    payload,
  };
}