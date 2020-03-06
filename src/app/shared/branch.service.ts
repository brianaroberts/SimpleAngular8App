import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { AnyARecord } from 'dns';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
  };

@Injectable()
export class BranchService {
    branches: any[];
    
    constructor (private httpClient: HttpClient, private route:ActivatedRoute) { 
        
    }

    getBranchesAsync() {
        let url = "assets/data/milSrvs.json"; 

        return this.httpClient.get("assets/data/milSrvs.json", httpOptions);
    }

    getBranches() {
        return this.branches; 
    }
        
    getBranch(branchId:number) {
        console.log(this.branches); 
        return this.branches.find(branch => branch.id === branchId)
    }
}