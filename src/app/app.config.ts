import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from "@ngrx/store";
import { modeReducer } from "./common/theme/modes/mode.reducer";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter([...routes]),
    provideAnimations(),
    importProvidersFrom(),
    provideStore({darkMode: modeReducer}),
    provideStoreDevtools(),
]
}