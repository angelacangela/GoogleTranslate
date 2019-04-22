import { handleActions } from "redux-actions";
import {
  GET_TRANSLATION_REQUEST,
  GET_TRANSLATION_SUCCESS,
  GET_TRANSLATION_FAILURE
} from "../actions/types";

export default handleActions(
  {
    [GET_TRANSLATION_REQUEST]: (state, { payload }) => {
      const { targetLang, sourceLang, sourceText } = payload;
      return {
        ...state,
        activeTranslation: {
          sourceLang,
          sourceText,
          targetLang,
        },
        isFetching: true
      }
    },
    [GET_TRANSLATION_SUCCESS]: (state, { payload }) => {
      const translation = payload[0][0][0];
      return {
        ...state,
        activeTranslation: {
          ...state.activeTranslation,
          translation
        },
        translationHistory: [
          ...state.translationHistory,
          {
            ...state.activeTranslation,
            translation
          }
        ],
        isFetching: false,
      }
    },
    [GET_TRANSLATION_FAILURE]: (state) => ({
      ...state,
      isFetching: false
    })
  },
  {
    activeTranslation: {},
    translationHistory: [],
    isFetching: false
  }
);
