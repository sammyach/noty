import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SengaDetailsComponent } from './senga-details.component';

describe('SengaDetailsComponent', () => {
  let component: SengaDetailsComponent;
  let fixture: ComponentFixture<SengaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SengaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SengaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
