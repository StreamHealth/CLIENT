import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-profile-container',
    standalone: true,
  imports: [
    MatSlideToggle,
    FormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButton,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      }}
  ],
    templateUrl: './profile-container.component.html',
    styleUrl: './profile-container.component.css',
})
export class ProfileContainerComponent {
    profileName: string = '';
    totalSalesToday: string = '';
    filterByCashier: boolean = false;
    filterByDate: string = '';
    searchId: string = '';

    constructor(private apiService: ApiService) {}

    getProfile() {
        this.apiService.getProfile().then(response => {
            this.profileName = response.data.name;
            this.totalSalesToday = parseFloat(
                response.data.totalSalesToday
            ).toFixed(2);
        });
    }

    getSales() {
        this.apiService
            .getSales(this.filterByCashier, this.searchId, this.filterByDate)
            .then(response => {
                console.log(response.data);
            });
    }

    ngOnInit() {
        this.getProfile();
        this.getSales();
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD

    if (!this.filterByDate.match(datePattern)) {
      console.log(this.filterByDate)
      console.error('Date is not in the correct format');
      return;
    }

    console.log(filterValue);
  }
}
