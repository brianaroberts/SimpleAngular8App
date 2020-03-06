import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'; 
import { BranchService } from './branch.service';
import { map } from 'rxjs/operators'; 

@Injectable()
export class BranchesResolver implements Resolve<any> {
    constructor(private branchService: BranchService) { }

    resolve() {
        return this.branchService.getBranchesAsync().pipe(map(data => data)); 
    }
}