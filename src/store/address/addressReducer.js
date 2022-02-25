import {
  ON_INPUT_CHANGE,
  GET_ADDRESS_SUCCESS,
} from "./addressActionTypes";

const initialState = {
  addressLine1: "",
  addressLine2: "",
  landmark: "",
  city: "",
  state: "",
  zipCode: "",
};

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
