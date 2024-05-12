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
    ],
    templateUrl: './products-container.component.html',
    styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent {
    displayedColumns: string[] = [
        'productName',
        'productDescription',
        'productPrice',
        'productStock',
        'updateAction',
        'deleteAction',
    ];
    dataSource: any = [];
    constructor(
        private apiService: ApiService,
        private changeDetectorRefs: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.apiService.getAllProducts().then(data => {
            this.dataSource = data;
        });
    }

    updateProduct(id: number) {
        console.log(id);
    }

    deleteProduct(id: number) {
        console.log(id);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.apiService.getAllProducts(filterValue).then(data => {
            this.dataSource = data;
            this.changeDetectorRefs.detectChanges();
        });
    }
}
