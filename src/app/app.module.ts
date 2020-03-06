import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component'
import { BranchService } from './shared/branch.service';
import { ToastrService } from './common/toastr.service';
import { BranchesComponent } from './BranchComponents/branches.component';
import { BranchDetailsComponent } from './BranchComponents/branchDetails.component';
import { BranchThumbnailComponent } from './BranchComponents/branchThumbnail.component';
import { AppFooterComponent } from './appFooter.component';
import { Error404Component } from './errors/404.component';
import { BranchRouteActivator } from './shared/branch-route-activator.service';

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
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
