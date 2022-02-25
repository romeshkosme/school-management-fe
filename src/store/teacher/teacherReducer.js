import {
  ON_INPUT_CHANGE,
  GET_TEACHER,
  GET_TEACHERS,
  GET_TEACHERS_SUCCESS,
  GET_TEACHER_SUCCESS,
} from "./teacherActionTypes";

const initialState = {
  dateOfJoining: "",
  dateOfLeaving: "",
  teachers: [],
  loader: false,
};

export default function teacherReducer(state = initialState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case GET_TEACHERS:
      return {
        ...state,
        loader: true,
      };
    case GET_TEACHERS_SUCCESS:
      return {
        ...state,
        loader: false,
        teachers: action.payload,
      };
    case GET_TEACHER:
      return {
        ...state,
        loader: true,
      };
    case GET_TEACHER_SUCCESS:
      return {
        ...state,
        loader: false,
        ...action.payload,
        dateOfJoining: new Date(action.payload.dateOfJoining)
          .toISOString()
          .slice(0, 10),
        dateOfLeaving: new Date(action.payload.dateOfLeaving)
          .toISOString()
          .slice(0, 10),
      };
    default:
      return state;
  }
}
