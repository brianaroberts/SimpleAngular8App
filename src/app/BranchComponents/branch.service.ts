import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { IBranch } from './IBranch';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
  };

@Injectable()
export class BranchService {
    branches: IBranch[];
    
    constructor (private httpClient: HttpClient, private route:ActivatedRoute) { 
        
    }

    getBranchesAsync() {
        let url = "assets/data/milSrvs.json"; 

        return this.httpClient.get("assets/data/milSrvs.json", httpOptions);
    }

    getBranches() {
        if (!(this.branches?.length > 0)) {
            //TODO: We need to load up branches here!
        }
        return this.branches; 
    }
        
    getBranch(branchId:number) {
        //console.log(this.branches); 
        return this.branches.find(branch => branch.id === branchId)
    }
}