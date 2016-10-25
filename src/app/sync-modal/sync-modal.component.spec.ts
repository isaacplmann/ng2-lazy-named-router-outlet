/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SyncModalComponent } from './sync-modal.component';

describe('SyncModalComponent', () => {
  let component: SyncModalComponent;
  let fixture: ComponentFixture<SyncModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
