import { combineReducers, legacy_createStore as createStore } from "redux";
import mainPageReducer from './mainPageReducer';
import jobPageReducer from "./jobPageReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    JobPage:jobPageReducer,
});

let store = createStore(reducers);
export default store

