import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { modeState } from "./modes/mode.state";
import { isDarkMode } from "./modes/mode.selectors";
import { mode } from "./modes/mode.actions";

@Injectable({
  providedIn: "root",
})
export class themeFacade {
  isDarkMode!: Observable<boolean>;
  constructor(private store: Store<modeState>) {
    this.isDarkMode = this.store.select(isDarkMode);    
  }

  toggleTheme() {
    this.store.dispatch(mode.toggleMode())
  }
}
