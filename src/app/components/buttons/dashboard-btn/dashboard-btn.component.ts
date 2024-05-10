import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AxiosService } from '../../../services/axios.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
    selector: 'app-dashboard-btn',
    standalone: true,
    imports: [MatButton],
    templateUrl: './dashboard-btn.component.html',
    styleUrl: './dashboard-btn.component.css',
})
export class DashboardBtnComponent {
    constructor(
        private apiService: ApiService,
        private routerService: Router
    ) {}

    onButtonClick() {
        try {
            this.apiService
                .getProfile()
                .then(response => {
                    if (response.status === 200) {
                        this.routerService.navigate(['/dashboard']);
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 403) {
                        this.routerService.navigate(['/auth']);
                    }
                });
        } catch (err) {
            console.log('Error: ', err);
        }
    }
}
