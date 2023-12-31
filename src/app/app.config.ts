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
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { TranslocoHttpLoader } from "../app/transloco-loader";
import { TRANSLOCO_LOADER, provideTransloco } from "@ngneat/transloco";
import { languageReducer } from "./common/util/language/language.reducer";
import { productReducer } from "./product/product.reducer";
import { provideEffects } from "@ngrx/effects";
import { ProductEffects } from "./product/product.effects";
import { dialogReducer } from "./common/util/dialog/dialog.reducer";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { DialogEffects } from "./common/util/dialog/dialog.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([...routes]),
    provideAnimations(),
    importProvidersFrom(
      FormGroup,
      FormControl,
      MatDialogModule,
    ),
    provideStore({
      currentTheme: themeReducer,
      selectedLanguage: languageReducer,
      products: productReducer,
      openDialog: dialogReducer
    }),
    provideEffects([ProductEffects, DialogEffects]),
    provideStoreDevtools({
      maxAge: 55,
      logOnly: false, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([])
    ),
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
