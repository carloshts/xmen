import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarEpisodiosComponent } from './pesquisar-episodios.component';

describe('PesquisarEpisodiosComponent', () => {
  let component: PesquisarEpisodiosComponent;
  let fixture: ComponentFixture<PesquisarEpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarEpisodiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
