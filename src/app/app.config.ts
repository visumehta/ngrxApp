import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { themeReducer } from "./common/util/theme/theme.reducer";
import { provideHttpClient } from "@angular/common/http";
import { TranslocoHttpLoader } from "../app/transloco-loader";
import { TRANSLOCO_LOADER, provideTransloco } from "@ngneat/transloco";
import { languageReducer } from "./common/util/language/language.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([...routes]),
    provideAnimations(),
    importProvidersFrom(),
    provideStore({
      currentTheme: themeReducer,
      selectedLanguage: languageReducer,
    }),
    provideStoreDevtools({
      maxAge: 55,
      logOnly: false, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ["en", "hi"],
        defaultLang: "en",
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
