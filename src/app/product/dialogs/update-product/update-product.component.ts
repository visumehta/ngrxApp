import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
  standalone: true
})
export class UpdateProductComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {
    console.log(data);
    
  }
}
