import { combineReducers } from "redux";
import translation from "./translation.reducer";
import languages from "./languages.reducer";

export default combineReducers({
  languages,
  translation
});
