import { createFeatureSelector, createSelector } from "@ngrx/store";
import { modeState } from "./mode.state";

export const selectModeState = createFeatureSelector<modeState>('darkMode');

export const isDarkMode = createSelector(
  selectModeState,
  (state: modeState) => state.darkMode
);
