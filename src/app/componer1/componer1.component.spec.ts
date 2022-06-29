import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componer1Component } from './componer1.component';

describe('Componer1Component', () => {
  let component: Componer1Component;
  let fixture: ComponentFixture<Componer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
