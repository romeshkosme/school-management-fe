import {
  ADD_YEAR,
  ADD_YEAR_SUCCESS,
  GET_YEAR,
  GET_YEAR_SUCCESS,
  GET_YEARS,
  GET_YEARS_SUCCESS,
} from "./yearActionTypes";

export const addYear = (payload) => {
  return {
    type: ADD_YEAR,
    payload,
  };
};

export const addYearSuccess = (payload) => {
  return {
    type: ADD_YEAR_SUCCESS,
    payload,
  };
};

export const getYears = (payload) => {
  return {
    type: GET_YEARS,
    payload,
  };
};

export const getYearsSuccess = (payload) => {
  return {
    type: GET_YEARS_SUCCESS,
    payload,
  };
};

export const getYear = (payload) => {
  return {
    type: GET_YEAR,
    payload,
  };
};

export const getYearSuccess = (payload) => {
  return {
    type: GET_YEAR_SUCCESS,
    payload,
  };
};
