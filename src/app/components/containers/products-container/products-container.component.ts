import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAllProducts().then(data => {
      console.log('Products: ', data);
    })
  }
}
