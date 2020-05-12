import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePeliculaComponent } from './padre-pelicula.component';

describe('PadrePeliculaComponent', () => {
  let component: PadrePeliculaComponent;
  let fixture: ComponentFixture<PadrePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadrePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
