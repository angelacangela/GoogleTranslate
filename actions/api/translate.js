import { fetchTranslation } from "./common";
import { createAction } from "redux-actions";

import {
  GET_TRANSLATION_REQUEST,
  GET_TRANSLATION_SUCCESS,
  GET_TRANSLATION_FAILURE
} from "../types";

export const getTranslationRequest = createAction(GET_TRANSLATION_REQUEST);
export const getTranslationSuccess = createAction(GET_TRANSLATION_SUCCESS);
export const getTranslationFailure = createAction(GET_TRANSLATION_FAILURE);

export const getTranslation = (options) => {
  return async function(dispatch) {
    dispatch(getTranslationRequest(options));
    let response;
    let responseJson;
    try {
      response = await fetchTranslation(sourceText, targetLang, sourceLang);
      if (response.status >= 200 && response.status < 300) {
        responseJson = await response.json();
        dispatch(getTranslationSuccess(responseJson));
      } else {
        const err = await response.json();
          await Promise.reject(err);
      }
    } catch (err) {
      dispatch(getTranslationFailure(err));
    }
  };
};
