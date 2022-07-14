import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SengaFrameComponent } from './senga-frame.component';

describe('SengaFrameComponent', () => {
  let component: SengaFrameComponent;
  let fixture: ComponentFixture<SengaFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SengaFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SengaFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
