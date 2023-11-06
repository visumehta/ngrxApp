import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from 'src/app/auth/dialogs/login/login.component';
import { themeFacade } from '../theme/theme.facade';
import { Observable } from 'rxjs';
import { modeState } from '../theme/modes/mode.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatDialogModule, MatMenuModule],
  
})
export class HeaderComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  isDarkMode$!: Observable<boolean>
  constructor(public dialog: MatDialog, private themeFacade: themeFacade) {
    this.isDarkMode$ = this.themeFacade.isDarkMode;
  }
  openDialog() {
    const openDialog = this.dialog.open(LoginComponent, {restoreFocus: false});
    openDialog.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  toggleTheme() {
    this.themeFacade.toggleTheme()
  }

}
