import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service';

import {
  BranchService,
  BranchesComponent,
  BranchDetailsComponent,
  BranchThumbnailComponent,
  BranchRouteActivator,
  BranchesResolver
} from './BranchComponents/index'; 

import { AppFooterComponent } from './appFooter.component';
import { Error404Component } from './errors/404.component';

@NgModule({
  // Components, Pipes, and directives go here!
  declarations: [
    AppComponent,
    NavBarComponent,
    AppFooterComponent,
    BranchesComponent,
    BranchDetailsComponent,
    Error404Component,
    BranchThumbnailComponent
  ],
  // All other modules
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule    
  ],
  // You add your servvices here!
  providers: [
    BranchService,
    BranchRouteActivator,
    BranchesResolver,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
