import get from "lodash/get";
import { createSelector } from "reselect";

export const innerTranslation = (state) => get(state, "translation", {});

export const translation = createSelector(innerTranslation, (it) => get(it, "translation", ""));
