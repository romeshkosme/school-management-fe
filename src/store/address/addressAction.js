import { ON_INPUT_CHANGE, GET_ADDRESS, GET_ADDRESS_SUCCESS } from "./addressActionTypes";

export const onInputChange = (key, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: { key, value },
  };
};

export const getAddress = (payload) => {
  return {
    type: GET_ADDRESS,
    payload,
  };
}

export const getAddressSuccess = (payload) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload,
  };
}