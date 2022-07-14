import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SengaBoxComponent } from './senga-box.component';

describe('SengaBoxComponent', () => {
  let component: SengaBoxComponent;
  let fixture: ComponentFixture<SengaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SengaBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SengaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
