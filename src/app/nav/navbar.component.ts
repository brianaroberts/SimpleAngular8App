import { Component, OnInit } from '@angular/core';
import { BranchService } from '../shared/branch.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        li > a.active { color: #F97924 }
        a.active { color: #F97924 }
    `]
})

export class NavBarComponent {
    branches:any

    constructor(private branchService:BranchService) {
    }

    ngOnInit() {
        this.branchService.getBranchesAsync().subscribe(data => {
            this.branches = data; 
        });
    }
}