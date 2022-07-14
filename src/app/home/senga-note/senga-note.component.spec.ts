import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SengaNoteComponent } from './senga-note.component';

describe('SengaNoteComponent', () => {
  let component: SengaNoteComponent;
  let fixture: ComponentFixture<SengaNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SengaNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SengaNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
