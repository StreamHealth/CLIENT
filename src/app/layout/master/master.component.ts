import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-master',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './master.component.html',
    styleUrl: './master.component.css',
})
export class MasterComponent {}
