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
  constructor(public dialog: MatDialog, public themeFacade: themeFacade) {
    // this.isDarkMode$ = this.themeFacade.isDarkMode;
    // this.isDarkMode$.subscribe((res: any) => { console.log(res);
    // })
    
  }
  openDialog() {
    const openDialog = this.dialog.open(LoginComponent, {restoreFocus: false});
    openDialog.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  toggleMode() {
    this.isDarkMode$.subscribe((isDark: boolean) => {
      console.log('res mode', isDark);
      if (isDark) {
        console.log('isdark1', isDark);
        
        this.themeFacade.setLightMode();
      } else {
        console.log('isdark2', isDark);

        this.themeFacade.setDarkMode();
      }
      
    })
    
    
  }

}
