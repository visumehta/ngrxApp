import { createReducer, on, Action } from "@ngrx/store";
import { ThemeState, initialThemeState } from "./theme.state";
import { theme } from "./theme.actions";

export const _themeReducer = createReducer(
    initialThemeState,
    on(theme.toggleTheme, (state) => ({
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
    })),
    // on(theme.setTheme, (state, { currentTheme }) => ({
    //     ...state,
    //     currentTheme
    // }))
)

export function themeReducer(state: ThemeState | undefined, action: Action) {
    return _themeReducer(state, action)
} 