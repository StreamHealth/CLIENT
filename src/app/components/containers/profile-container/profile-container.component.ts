import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-profile-container',
    standalone: true,
    imports: [],
    templateUrl: './profile-container.component.html',
    styleUrl: './profile-container.component.css',
})
export class ProfileContainerComponent {
    profileName: string = '';

    constructor(private apiService: ApiService) {}

    getProfile() {
        this.apiService.getProfile().then(response => {
            this.profileName = response.data.name;
        });
    }

    ngOnInit() {
        this.getProfile();
    }
}
