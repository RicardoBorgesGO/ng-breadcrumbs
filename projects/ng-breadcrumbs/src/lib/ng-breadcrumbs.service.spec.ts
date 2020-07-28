import { TestBed } from '@angular/core/testing';

import { NgBreadcrumbsService } from './ng-breadcrumbs.service';

describe('NgBreadcrumbsService', () => {
  let service: NgBreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
