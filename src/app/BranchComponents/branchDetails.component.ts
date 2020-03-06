import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 

import { BranchService } from './branch.service'; 
import { IBranch } from './IBranch';

@Component({    
    selector: 'branch-details',                            // We are using routing so the selector is just there for non routing cases
    templateUrl: './branchDetails.component.html',    
    styles: [`
        container: { padding-left: 20px; padding-right: 20px, border-radius: .55rem }
        mil-seal-image: { height: 100px; }
        .btn { border-radius: .55rem }
    `]                                                      // Styles can be delared in many many ways, this is just one of them. 
})

export class BranchDetailsComponent {
    branch: IBranch;

    constructor(private router: Router, private branchService: BranchService, private route:ActivatedRoute)
    {

    }

    ngOnInit() {        
        this.branch = this.branchService.getBranch(+this.route.snapshot.params['id']); 
    }

    handleButtonGoBack() {
        this.router.navigate(['/']);
    }
}