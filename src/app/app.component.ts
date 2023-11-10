import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CommonModule, ProductListComponent, MatDialogModule],
})
export class AppComponent implements OnInit{
  title = 'myApp';
  translocoService = inject(TranslocoService)
  
  ngOnInit(): void {
      this.translocoService.getDefaultLang()      
  }
}
