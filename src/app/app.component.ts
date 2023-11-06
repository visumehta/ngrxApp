import { Component } from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { CommonModule } from '@angular/common';
import { themeFacade } from './common/theme/theme.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CommonModule],
})
export class AppComponent {
  title = 'myApp';
}
