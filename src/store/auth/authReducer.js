const initialState = {
    token: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    user: null,
  };
  
  // Use the initialState as a default value
  export default function authReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case "LOGIN":
          return {initialState, token: action.payload};
      default:
        return state;
    }
  }
  