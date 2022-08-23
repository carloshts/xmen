import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InimigosComponent } from './inimigos.component';

describe('InimigosComponent', () => {
  let component: InimigosComponent;
  let fixture: ComponentFixture<InimigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InimigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InimigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
