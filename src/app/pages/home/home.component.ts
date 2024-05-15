import { Component } from '@angular/core';
import { HeroComponent } from '../../components/layout/hero/hero.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { WhatWeOfferComponent } from '../../components/layout/what-we-offer/what-we-offer.component';

@Component({
    selector: 'app-home',
    standalone: true,
  imports: [
    HeroComponent,
    FooterComponent,
    WhatWeOfferComponent,
  ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
