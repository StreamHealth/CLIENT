import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    ProfileCardComponent,
    NgForOf,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  members  = [
    {
      name: 'Ma. Sofia Beron',
      imgUrl: '../assets/members/masofia.png',
      profession: 'Frontend Developer',
      imgHeight: '39%'
    },
    {
      name: 'Xian Hui Cheng',
      imgUrl: '../assets/members/xian.png',
      profession: 'UI/UX Designer',
      imgHeight: '38.8%'
    },
    {
      name: 'Marie Cris Edusma',
      imgUrl: '../assets/members/mariecris.png',
      profession: 'UI/UX Designer',
      imgHeight: '58.5%'
    },
    {
      name: 'Rafael Louie Miguel',imgUrl: '../assets/members/migs.png',
      profession: 'Backend Developer',
      imgHeight: '77.3%'
    },
    {
      name: 'Vivien Nombre',
      imgUrl: '../assets/members/vivien.png',
      profession: 'Researcher',
      imgHeight: '79.5%'
    }
  ];

}
