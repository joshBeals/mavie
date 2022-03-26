import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import memoryReducer from "./memoryReducer";
import notesReducer from "./notesReducer";
import userReducer from "./userReducer";
import weightReducer from "./weightReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    form: formReducer,
    notes: notesReducer,
    memories: memoryReducer,
    weights: weightReducer,
});