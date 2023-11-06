import { createActionGroup, emptyProps } from "@ngrx/store";

export const mode = createActionGroup({
    source: 'Theme Mode',
    events: {
        'toggleMode': emptyProps(),
        'setDarkMode': emptyProps(),
        'setLightMode': emptyProps()
    }
})