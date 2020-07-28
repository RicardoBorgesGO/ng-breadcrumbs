import { NgModule } from '@angular/core';
import { NgBreadcrumbsComponent } from './ng-breadcrumbs.component';
import { NgBreadcrumbsService } from './ng-breadcrumbs.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NgBreadcrumbsComponent],
  providers: [
    NgBreadcrumbsService
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule
  ],
  exports: [NgBreadcrumbsComponent]
})
export class NgBreadcrumbsModule { }
