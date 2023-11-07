import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const theme = createActionGroup({
    source: 'Toggle Theme',
    events: {
        'toggleTheme': emptyProps(),
        // 'setTheme': props<{currentTheme: 'dark' | 'light'}>()
    }
})