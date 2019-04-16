import { createAction } from "redux-actions";

import {
  SET_SOURCE_LANG,
  SET_TARGET_LANG
} from "./types";

export const setSourceLang = createAction(SET_SOURCE_LANG);
export const setTargetLang = createAction(SET_TARGET_LANG);

export const selectSourceLang = (options) => {
  return async function(dispatch) {
    dispatch(setSourceLang(options));
  }
}

export const selectTargetLang = (options) => {
  return async function(dispatch) {
    dispatch(setTargetLang(options));
  }
}
