import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutanteComponent } from './mutante.component';

describe('MutanteComponent', () => {
  let component: MutanteComponent;
  let fixture: ComponentFixture<MutanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
