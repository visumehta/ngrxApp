import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCurrentTheme } from "./theme.selector";
import { theme } from "./theme.actions";

@Injectable({
  providedIn: "root",
})
export class themeFacade {
  store = inject(Store);
  theme$ = this.store.select(selectCurrentTheme)
  toggleTheme() {
    this.store.dispatch(theme.toggleTheme());
  }
}
