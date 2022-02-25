import {
  ADD_YEAR,
  ADD_YEAR_SUCCESS,
  GET_YEAR,
  GET_YEAR_SUCCESS,
  GET_YEARS,
  GET_YEARS_SUCCESS,
} from "./yearActionTypes";

const initialState = {
  year: "",
  years: [],
  loading: false,
  error: null,
};

export default function yearReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_YEAR:
      return {
        ...state,
        loading: false,
      };
    case ADD_YEAR_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_YEAR:
      return {
        ...state,
        loading: false,
      };
    case GET_YEAR_SUCCESS:
      return {
        ...state,
        loading: false,
        year: action.payload,
      };
    case GET_YEARS:
      return {
        ...state,
        loading: false,
      };
    case GET_YEARS_SUCCESS:
      return {
        ...state,
        loading: false,
        years: action.payload,
      };
    default:
      return state;
  }
}
