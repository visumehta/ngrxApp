import { createReducer, on } from "@ngrx/store";
import { initialModeState } from "./mode.state";
import { mode } from "./mode.actions";
import { modeState } from "./mode.state";

export const modeReducer = createReducer(
    initialModeState,
    on(mode.toggleMode, (state) => ({
        ...state,
        darkMode: !state.darkMode
    })),
    on(mode.setDarkMode, (state) => ({
        ...state,
        darkMode: true
    })),
    on(mode.setLightMode, (state) => ({
        ...state,
        darkMode: false
    }))
)