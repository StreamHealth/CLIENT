import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosContainerComponent } from './pos-container.component';

describe('PosContainerComponent', () => {
    let component: PosContainerComponent;
    let fixture: ComponentFixture<PosContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PosContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PosContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
