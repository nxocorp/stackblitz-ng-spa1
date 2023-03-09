import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SpaComponent } from  './spa/spa.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [{ path: '', component: SpaComponent }];

@NgModule({
  declarations: [SpaComponent, HeadComponent, BodyComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],

  bootstrap: [SpaComponent],
})
export class SpaModule {}
