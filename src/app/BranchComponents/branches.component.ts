import { Component, OnInit } from '@angular/core'
import { BranchService } from '../shared/branch.service'
import { ToastrService } from '../common/toastr.service'
import { Location } from '@angular/common'

@Component({
    selector: 'branch-list',
    templateUrl: './branches.component.html'
})

export class BranchesComponent {
    branches: any[]

    constructor(private branchService:BranchService, private toastr: ToastrService, private loc: Location) {
    }   

    ngOnInit() {
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