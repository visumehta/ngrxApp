import { createReducer, on, Action } from "@ngrx/store";
import { LanguageState, initialLanguageState } from "./langauge.state";
import { langaugeActions } from "./language.actions";

export const _languageReducer = createReducer(
    initialLanguageState,
    on(langaugeActions.changeLanguage, (state, {selectedLanguage}) => ({
        ...state,
        selectedLanguage
    })),
    on(langaugeActions.translations, (state, {translations}) => ({
        ...state,
        translations: state.translations
    }))
)

export function languageReducer(state: LanguageState| undefined, action: Action) {
    return _languageReducer(state, action)
}