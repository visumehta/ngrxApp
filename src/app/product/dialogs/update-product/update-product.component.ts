import { Component, Inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ProductsModel } from "../../product.model";
import { CommonModule } from "@angular/common";
import { ProductFacade } from "../../product.facade";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule
  ],
  preserveWhitespaces: true
})
export class UpdateProductComponent {
  myForm = new FormGroup({
    title: new FormControl(this.data.title, [Validators.required]),
    brand: new FormControl(this.data.brand, [Validators.required]),
    category: new FormControl(this.data.category, [Validators.required]),
    description: new FormControl(this.data.description, [Validators.required]),
    price: new FormControl(this.data.price, [Validators.required]),
    stock: new FormControl(this.data.stock, [Validators.required]),
  });
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productFacade: ProductFacade) {
    console.log("data", data);
  }

  updateForm(val: ProductsModel) {
    console.log("update valasasas", val);
    this.productFacade.updateProduct(this.data.id, val)
    
  }
  resetForm() {
    this.myForm.reset()
  }
}
