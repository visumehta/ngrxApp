import { createReducer, on } from "@ngrx/store";
import { initialModeState, modeState } from "./mode.state";
import { mode } from "./mode.actions";

export const modeReducer = createReducer<modeState>(
    initialModeState,
    on(mode.setDarkMode, (state) => ({
        ...state,
        darkMode: true
    })),
    on(mode.setLightMode, (state) => ({
        ...state,
        darkMode: false
    }))
)