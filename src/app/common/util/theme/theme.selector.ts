import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThemeState } from "./theme.state";

export const selectThemeState = createFeatureSelector<ThemeState>('currentTheme');

export const selectCurrentTheme = createSelector(
    selectThemeState,
    (state: ThemeState) => state.currentTheme
)