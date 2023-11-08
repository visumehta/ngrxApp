import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { ProductFacade } from "../../product.facade";
import { ProductsModel } from "../../product.model";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { UpdateProductComponent } from "../../dialogs/update-product/update-product.component";
import { dialogFacade } from "src/app/common/util/dialog/dialog.facade";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class ProductListComponent implements OnInit {
  productFacade = inject(ProductFacade);
  dialogFacade = inject(dialogFacade);
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.productFacade.getAllProducts();
    this.productFacade.productList$.subscribe((res: ProductsModel[]) => {
      console.log(res);
    });
  }

  openUpdateDialog(productId: number) {
    console.log(productId);
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: productId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("close dialog", result);

      // Perform any actions after the dialog is closed
    });
    this.dialogFacade.openDialogUsingId(productId);
  }
}
