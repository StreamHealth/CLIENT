import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../../dialogs/delete-confirmation/delete-confirmation.component';
import { CreateProductComponent } from '../../buttons/create-product/create-product.component';

@Component({
    selector: 'app-products-container',
    standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    CreateProductComponent,
  ],
    templateUrl: './products-container.component.html',
    styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent {
    allData: any = [];
    dataSource: any = [];
    page: number = 1;
    pageSize: number = 5;
    totalElements: number = 0;
    totalPages: number = 0;
    isLastPage: boolean = false;

    displayedColumns: string[] = [
        'productName',
        'productDescription',
        'productPrice',
        'productStock',
        'updateAction',
        'deleteAction',
    ];
    constructor(
        private apiService: ApiService,
        private changeDetectorRefs: ChangeDetectorRef,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.fetchProducts();
    }

    fetchProducts(searchValue: string = '', page: number = this.page) {
        this.apiService.getAllProducts(searchValue, page - 1).then(data => {
            this.allData = data.content;
            this.totalPages = data.totalPages;
            this.isLastPage = data.last;
            this.dataSource = this.allData;
            this.changeDetectorRefs.detectChanges();
        });
    }

    nextPage() {
        if (!this.isLastPage) {
            this.page++;
            this.fetchProducts('', this.page);
        }
    }

    previousPage() {
        if (this.page > 1) {
            this.page--;
            this.fetchProducts('', this.page);
        }
    }

    updateProduct(id: number) {
        console.log(id);
    }

    deleteProduct(id: number, name: string) {
        const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
            width: '450px',
            data: { name: 'Product ' + name },
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.apiService.deleteProduct(id).then(() => {
                    this.page = 1;
                    this.fetchProducts('', this.page);
                });
            }
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.page = 1; // Reset the page number
        this.fetchProducts(filterValue, this.page);
    }
}
