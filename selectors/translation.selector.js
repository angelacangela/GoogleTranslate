import get from "lodash/get";
import { createSelector } from "reselect";

export const translation = (state) => get(state, "translation", {});

export const activeTranslation = createSelector(translation, (t) => get(t, "activeTranslation"));
export const translationHistory = createSelector(translation, (t) => get(t, "translationHistory"));
export const isFetching = createSelector(translation, (t) => get(t, "isFetching"));
