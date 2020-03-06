import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BranchService } from './branch.service';
import { ToastrService } from '../common/toastr.service';
import { Location } from '@angular/common';
import { IBranch } from './IBranch';

@Component({
    selector: 'branch-list',
    templateUrl: './branches.component.html'
})

export class BranchesComponent {
    branches: IBranch[]

    constructor(private branchService:BranchService, private toastr: ToastrService, private loc: Location, private route:ActivatedRoute) {
    }   

    ngOnInit() {        
        this.branchService.branches = this.route.snapshot.data["branches"];
        this.branches = this.branchService.getBranches(); 
    }

    handleUpVoteClick(branch) {
        this.toastr.success("Go " + branch.name + "!");
    }
    
    handleDownVoteClick(branch) {
        this.toastr.error(branch.name + " working on some stuff");
    }   

    handleThumbnailClick(branchId) {
        this.loc.go("/details/" + branchId)
        // Route into the details for that service
    }
} 