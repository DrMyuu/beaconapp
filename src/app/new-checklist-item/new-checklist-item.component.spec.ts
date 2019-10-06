import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChecklistItemComponent } from './new-checklist-item.component';

describe('NewChecklistItemComponent', () => {
  let component: NewChecklistItemComponent;
  let fixture: ComponentFixture<NewChecklistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChecklistItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
