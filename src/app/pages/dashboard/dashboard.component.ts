import { Component } from '@angular/core';
import { AxiosService } from '../../services/axios.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    constructor(
        private axiosService: AxiosService,
        private routerService: Router,
        private apiService: ApiService
    ) {}

    ngOnInit() {
        if (this.axiosService.getAuthToken() === null) {
            this.routerService.navigate(['/auth']);
        }

        try {
            this.apiService.getProfile().then(response => {
                if (response.status === 200) {
                    console.log('Profile: ', response.data);
                }
            });
        } catch (err) {
            console.log('Error: ', err);
        }
    }
}
