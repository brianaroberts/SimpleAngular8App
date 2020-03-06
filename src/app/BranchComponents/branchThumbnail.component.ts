import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBranch } from './IBranch';

@Component({
    selector: 'branch-thumbnail', 
    templateUrl: './branchThumbnail.component.html',
    styles: [`           
        .branch-image: { height: 80px; }    
        .thumbnail { min-height: 200px; max-width: 300px; text-align: center; } 
        .motto: { text-align: center; }      
        h2: { text-align: center; }
        .btn { border-radius: .55rem }
    `]
})

export class BranchThumbnailComponent {
    @Input() branch:any
    @Output() upVoteClick = new EventEmitter()
    @Output() downVoteClick = new EventEmitter()
    
    constructor() {}

    handleUpVoteClick(branch: IBranch) {
        //console.log("button clicked!")
        this.upVoteClick.emit(branch);
        if (isNaN(branch?.votes))
        {
            branch.votes=1; 
        } else {
            branch.votes++; 
        }
    }

    handleDownVoteClick(branch: IBranch) {
        //console.log("button clicked!")
        this.downVoteClick.emit(branch);
        if (isNaN(branch?.votes))
        {
            branch.votes=-1; 
        } else {
            branch.votes--; 
        }
    }   
}  