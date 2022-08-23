import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarMutantesComponent } from './pesquisar-mutantes.component';

describe('PesquisarMutantesComponent', () => {
  let component: PesquisarMutantesComponent;
  let fixture: ComponentFixture<PesquisarMutantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarMutantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarMutantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
