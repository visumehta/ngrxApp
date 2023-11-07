import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CommonModule],
})
export class AppComponent implements OnInit{
  title = 'myApp';
  translocoService = inject(TranslocoService)
  
  ngOnInit(): void {
      this.translocoService.getDefaultLang()
      // console.log(this.translocoService.getDefaultLang());
      
  }
}
