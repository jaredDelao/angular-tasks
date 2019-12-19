import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoUnoComponent } from './hermano-uno.component';

describe('HermanoUnoComponent', () => {
  let component: HermanoUnoComponent;
  let fixture: ComponentFixture<HermanoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HermanoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HermanoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
