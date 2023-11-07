import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getSelectedLanguage } from "./language.selectors";
import { langaugeActions } from "./language.actions";
import { TranslocoService } from "@ngneat/transloco";

@Injectable({
    providedIn: 'root'
})

export class languageFacade {
    store = inject(Store);
    translocoService = inject(TranslocoService);
    selectedLanguage$ = this.store.select(getSelectedLanguage);

    setLanguage(lan: string) {
        this.store.dispatch(langaugeActions.changeLanguage({selectedLanguage: lan}));
        this.translocoService.setActiveLang(lan);
    }

    getTranslation(key: string) {
        console.log('key', key);
        return this.translocoService.translate(key);
    }

}