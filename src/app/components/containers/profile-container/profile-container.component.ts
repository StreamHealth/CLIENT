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

    constructor(private apiService: ApiService) {}

    getProfile() {
        this.apiService.getProfile().then(response => {
            this.profileName = response.data.name;
           this.totalSalesToday = parseFloat(response.data.totalSalesToday).toFixed(2);
        });
    }

    ngOnInit() {
        this.getProfile();
    }
}
