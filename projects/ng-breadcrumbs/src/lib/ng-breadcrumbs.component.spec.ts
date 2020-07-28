import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBreadcrumbsComponent } from './ng-breadcrumbs.component';

describe('NgBreadcrumbsComponent', () => {
  let component: NgBreadcrumbsComponent;
  let fixture: ComponentFixture<NgBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
