import get from "lodash/get";
import { createSelector } from "reselect";

export const languages = (state) => get(state, "languages", {});

export const sourceLang = createSelector(languages, (l) => get(l, "sourceLang", ""));
export const targetLang = createSelector(languages, (l) => get(l, "targetLang", ""));
