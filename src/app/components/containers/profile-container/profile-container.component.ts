import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
    selector: 'app-profile-container',
    standalone: true,
    imports: [],
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
}
