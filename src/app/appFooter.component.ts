import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: "./appFooter.component.html",
    styles: [`
        div: { text-align: center}
    `]
})

export class AppFooterComponent {
    currentQuote:Observable<any>;
    returnObj:any

    constructor(private httpClient: HttpClient) {

    }

    ngOnInit() {        
        this.httpClient.get("http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris").subscribe(data => 
        {
            this.returnObj = data;
            this.currentQuote = this.returnObj?.value?.joke?.replace("&nbsp;", " ").replace("&quot;", "'");   // Much better way to do this, but I'm out of time                      
       });   
    }
}
