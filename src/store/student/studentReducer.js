import {
  ON_INPUT_CHANGE,
  GET_STUDENTS,
  GET_STUDENTS_SUCCESS,
  GET_STUDENT,
  GET_STUDENT_SUCCESS,
} from "./studentActionTypes";

const initialState = {
  loader: false,
  students: [],
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case GET_STUDENTS:
      return {
        ...state,
        loader: true,
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        loader: false,
        students: action.payload,
      };
    case GET_STUDENT:
      return {
        ...state,
        loader: true,
      };
    case GET_STUDENT_SUCCESS:
      return {
        ...state,
        loader: false,
        ...action.payload,
        dateOfAdmission: new Date(action.payload.dateOfAdmission).toISOString().slice(0, 10),
        dateOfTc: new Date(action.payload.dateOfTc).toISOString().slice(0, 10),
      };
    default:
      return state;
  }
}
