import { createActionGroup, emptyProps } from "@ngrx/store";

export const mode = createActionGroup({
    source: 'Theme Mode',
    events: {
        'setDarkMode': emptyProps(),
        'setLightMode': emptyProps()
    }
})