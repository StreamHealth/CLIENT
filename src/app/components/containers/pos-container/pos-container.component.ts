import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { QuantityDialogComponent } from '../../dialogs/quantity-dialog/quantity-dialog.component';

@Component({
    selector: 'app-pos-container',
    standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatDialogClose,
    NgIf,
    NgClass,
  ],
    templateUrl: './pos-container.component.html',
    styleUrl: './pos-container.component.css',
})
export class PosContainerComponent  {
  page: number = 1;
  totalPages: number = 0;
  isLastPage: boolean = false;
  pages: number[] = [];
  products: any[] = [];
  totalAmount: number = 0;
  cartItems: any[] = [];
  payload = {
    clientName: "",
    totalAmount: 0,
    paymentMethod: "",
    discountType: {
      percentage: 0
    },
    products: this.cartItems.map(item => ({
      productId: item.product.productId,
      quantitySold: item.quantity
    }))
  };

  constructor(
    private apiService: ApiService,
    private changeDetectorRefs: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(searchValue: string = '', page: number = this.page) {
    this.apiService.getAllProducts(searchValue, page - 1).then(data => {
      this.products = data.content;
      this.totalPages = data.totalPages;
      this.isLastPage = data.last;
      this.pages = Array.from(
        { length: Math.min(5, this.totalPages) },
        (_, i) => i + 1
      );
      this.changeDetectorRefs.detectChanges();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.page = 1;
    this.fetchProducts(filterValue, this.page);
  }

  openAddQuantityDialog(product: any) {
    const dialogRef = this.dialog.open(QuantityDialogComponent, {
      width: '250px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cartItems.push({
          product,
          quantity: result.quantity
        });
        console.log(this.cartItems);
      }
    });
  }

  nextPage() {
    if (!this.isLastPage) {
      this.page++;
      this.fetchProducts( '',this.page);
    }
  }

  goToPage(pageNumber: number) {
    this.page = pageNumber;
    this.fetchProducts('', this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchProducts('', this.page);
    }
  }

}
