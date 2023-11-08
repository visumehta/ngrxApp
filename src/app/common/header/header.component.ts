import { Component, ViewChild } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMenuTrigger, MatMenuModule } from "@angular/material/menu";
import { LoginComponent } from "src/app/auth/dialogs/login/login.component";
import { themeFacade } from "../util/theme/theme.facade";
import { languageFacade } from "../util/language/language.facade";
import { OverlayContainer } from "@angular/cdk/overlay";
import { TranslocoModule } from "@ngneat/transloco";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    TranslocoModule
  ],
})
export class HeaderComponent {
  // @ViewChild("menuTrigger") menuTrigger!: MatMenuTrigger;
  theme: string = "light";

  // Facades
  isDarkMode$ = this.themeFacade.theme$;
  getSelectedLanguage$ = this.languageFacade.selectedLanguage$;

  getLang: string = 'en';
  constructor(
    private dialog: MatDialog,
    private themeFacade: themeFacade,
    public languageFacade: languageFacade,
    private overlay: OverlayContainer
  ) {
    this.isDarkMode$.subscribe((theme: string) => {
      console.log('subsctibe theme',theme);
      this.theme = theme;
      if (theme === 'dark') {
        console.log('if darek theme then overlay applied');
        
        this.overlay.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlay.getContainerElement().classList.remove('dark-theme');
      }
    });

    this.getSelectedLanguage$.subscribe((getLang: string) => {
      this.getLang = getLang;
    });
  }

  openDialog() {
    const openDialog = this.dialog.open(LoginComponent, {
      restoreFocus: false,
    });
    // openDialog.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  toggleTheme() {
    this.themeFacade.toggleTheme();
  }

  changeLanguage(lan: string) {
    this.languageFacade.setLanguage(lan);
  }
}
