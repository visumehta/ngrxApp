import { createActionGroup, props } from "@ngrx/store";


export const langaugeActions = createActionGroup({
    source: 'Langauge Selection',
    events: {
        'changeLanguage': props<{selectedLanguage: string}>(),
        'translations': props<{translations: string}>()
    }
})