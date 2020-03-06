import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { BranchService } from "./branch.service"; 

@Injectable()
export class BranchRouteActivator implements CanActivate {
  
    constructor(private branchService:BranchService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const branchExists = !!this.branchService.getBranch(+route.params['id']); 

        if (!branchExists) {
            this.router.navigate(['/404']); 
        }

        return branchExists;
    }
    
}