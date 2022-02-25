import {
  ON_INPUT_CHANGE,
  CREATE_STUDENT,
  GET_STUDENTS,
  GET_STUDENTS_SUCCESS,
  GET_STUDENT,
  GET_STUDENT_SUCCESS,
} from "./studentActionTypes";

export const onInputChange = (key, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: { key, value },
  };
};

export const createStudent = (payload) => {
  return {
    type: CREATE_STUDENT,
    payload,
  };
};

export const getStudents = (payload) => {
  return {
    type: GET_STUDENTS,
    payload,
  };
};

export const getStudentsSuccess = (payload) => {
  return {
    type: GET_STUDENTS_SUCCESS,
    payload,
  };
};

export const getStudent = (payload) => {
  return {
    type: GET_STUDENT,
    payload,
  };
};

export const getStudentSuccess = (payload) => {
  return {
    type: GET_STUDENT_SUCCESS,
    payload,
  };
};
