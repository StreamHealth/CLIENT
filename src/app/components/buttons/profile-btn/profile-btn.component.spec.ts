import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBtnComponent } from './profile-btn.component';

describe('ProfileBtnComponent', () => {
    let component: ProfileBtnComponent;
    let fixture: ComponentFixture<ProfileBtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfileBtnComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProfileBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
