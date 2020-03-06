import { Component, OnInit } from '@angular/core';
import { BranchService } from '../shared/branch.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'
})

export class NavBarComponent {
    branches:any

    constructor(private branchService:BranchService) {
    }

    ngOnInit() {
        this.branches = this.branchService.getBranches();
    }
}