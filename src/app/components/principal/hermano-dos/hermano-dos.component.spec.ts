import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoDosComponent } from './hermano-dos.component';

describe('HermanoDosComponent', () => {
  let component: HermanoDosComponent;
  let fixture: ComponentFixture<HermanoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HermanoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HermanoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
