import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSengaComponent } from './create-senga.component';

describe('CreateSengaComponent', () => {
  let component: CreateSengaComponent;
  let fixture: ComponentFixture<CreateSengaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSengaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSengaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
