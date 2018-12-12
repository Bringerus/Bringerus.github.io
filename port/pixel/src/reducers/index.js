import { combineReducers } from "redux";
import userReducer from "./userReducer";
import sliderReducer from "./sliderReducer";

export default combineReducers({
  user: userReducer,
  slider: sliderReducer
});
