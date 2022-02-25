import {
  ON_INPUT_CHANGE,
  GET_TEACHERS,
  GET_TEACHERS_SUCCESS,
  GET_TEACHER,
  GET_TEACHER_SUCCESS,
} from "./teacherActionTypes";

export const onInputChange = (key, value) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: { key, value },
  };
};

export const getTeachers = (payload) => {
  return {
    type: GET_TEACHERS,
    payload,
  };
};

export const getTeachersSuccess = (payload) => {
  return {
    type: GET_TEACHERS_SUCCESS,
    payload,
  };
};

export const getTeacher = (payload) => {
  return {
    type: GET_TEACHER,
    payload,
  };
};

export const getTeacherSuccess = (payload) => {
  return {
    type: GET_TEACHER_SUCCESS,
    payload,
  };
};
