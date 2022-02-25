import {
  ON_INPUT_CHANGE,
  ADD_CLASS,
  ADD_CLASS_SUCCESS,
  GET_CLASSES,
  GET_CLASSES_SUCCESS,
} from "./classActionTypes";

export const onInputChange = (name, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: {
      name,
      value,
    },
  };
};

export const addClass = (payload) => {
  return {
    type: ADD_CLASS,
    payload,
  };
};

export const addClassSuccess = (payload) => {
  return {
    type: ADD_CLASS_SUCCESS,
    payload,
  };
};

export const getClasses = (payload) => {
  return {
    type: GET_CLASSES,
    payload,
  };
};

export const getClassesSuccess = (payload) => {
  return {
    type: GET_CLASSES_SUCCESS,
    payload,
  };
};