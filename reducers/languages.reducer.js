import { handleActions } from "redux-actions";
import {
  SET_SOURCE_LANG,
  SET_TARGET_LANG
} from "../actions/types";

export default handleActions(
  {
    [SET_SOURCE_LANG]: (state, { payload }) => {
      const { sourceLang } = payload;
      return {
        ...state,
        sourceLang
      }
    },
    [SET_TARGET_LANG]: (state, { payload }) => {
      const { targetLang } = payload;
      return {
        ...state,
        targetLang
      }
    }
  },
  {
    sourceLang: "Detect language",
    targetLang: "English"
  }
);
