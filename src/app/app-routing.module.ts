import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './BranchComponents/branches.component';
import { BranchDetailsComponent } from './BranchComponents/branchDetails.component';
import { Error404Component } from './errors/404.component';
import { BranchRouteActivator } from './shared/branch-route-activator.service';
import { BranchesResolver } from './BranchComponents/branches-resolver.service';

const routes: Routes = [
  { path: 'branches', component: BranchesComponent, resolve: {branches: BranchesResolver} },
  { path: 'details/:id', component: BranchDetailsComponent, canActivate: [BranchRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/branches', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
