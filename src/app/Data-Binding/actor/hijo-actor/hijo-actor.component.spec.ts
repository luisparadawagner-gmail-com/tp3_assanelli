import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoActorComponent } from './hijo-actor.component';

describe('HijoActorComponent', () => {
  let component: HijoActorComponent;
  let fixture: ComponentFixture<HijoActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
