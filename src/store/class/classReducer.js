import {
  ON_INPUT_CHANGE,
  ADD_CLASS,
  ADD_CLASS_SUCCESS,
  GET_CLASS,
  GET_CLASSES,
  GET_CLASS_SUCCESS,
  GET_CLASSES_SUCCESS,
} from "./classActionTypes";

const initialState = {
  loader: false,
  standard: "",
  section: "",
  classTeacher: "",
  year: "",
  classes: [],
  years: [],
  sections: [],
};

export default function classReducer(state = initialState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ADD_CLASS:
      return {
        ...state,
        loader: true,
      };
    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        loader: false,
        standard: "",
        section: "",
        classTeacher: "",
        year: "",
        classes: [...state.classes, action.payload],
      };
    case GET_CLASS:
      return {
        ...state,
        loader: true,
      };
    case GET_CLASS_SUCCESS:
      return {
        ...state,
        loader: false,
        classes: action.payload,
      };
    case GET_CLASSES:
      return {
        ...state,
        loader: true,
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        loader: false,
        classes: action.payload,
      };
    default:
      return state;
  }
}
