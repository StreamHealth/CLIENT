import { Component } from '@angular/core';
import { AxiosService } from '../../services/axios.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { SidebarComponent } from '../../components/layout/sidebar/sidebar.component';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-dashboard',
    standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    SidebarComponent,
    MatIconButton,
    MatIcon,
  ],
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
