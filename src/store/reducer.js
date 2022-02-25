import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import studentReducer from "./student/studentReducer";
import addressReducer from "./address/addressReducer";
import teacherReducer from "./teacher/teacherReducer";
import adminReducer from "./admin/adminReducer";
import classReducer from "./class/classReducer";
import yearReducer from "./year/yearReducer";
const rootReducer = combineReducers({
  user: userReducer,
  student: studentReducer,
  address: addressReducer,
  teacher: teacherReducer,
  admin: adminReducer,
  class: classReducer,
  year: yearReducer,
});

export default rootReducer;
