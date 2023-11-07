import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LanguageState } from "./langauge.state";

const selectLanguageState = createFeatureSelector<LanguageState>('selectedLanguage');

export const getSelectedLanguage = createSelector(
    selectLanguageState, (state: LanguageState) => state.selectedLanguage
);

export const getTranslations = createSelector(
    selectLanguageState, (state: LanguageState) => state.translations
);