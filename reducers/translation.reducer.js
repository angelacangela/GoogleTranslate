import { handleActions } from "redux-actions";
import {
  GET_TRANSLATION_REQUEST,
  GET_TRANSLATION_SUCCESS,
  GET_TRANSLATION_FAILURE
} from "../actions/types";

export default handleActions(
  {
    [GET_TRANSLATION_REQUEST]: (state, { payload }) => {
      const { targetLang } = payload;
      return {
        ...state,
        targetLang,
        isFetching: true
      }
    },
    [GET_TRANSLATION_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        translation: payload[0][0][0],
        sourceLang: payload[8][0][0],
        sourceText: payload[0][0][1],
        isFetching: false
      }
    },
    [GET_TRANSLATION_FAILURE]: (state) => ({
      ...state,
      isFetching: false
    })
  },
  {
    isFetching: false
  }
);
