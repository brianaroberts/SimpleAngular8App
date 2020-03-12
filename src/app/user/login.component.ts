import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 

@Component ({
    templateUrl: './login.component.html',
    styles: [`
		.btn { border-radius: .55rem; margin-right: 10px}
		em { float:right; color:#E05C65; padding-left:10px; }
		.form-control { border-radius: .55rem}
    `]
})

export class LoginComponent {
	userName; 
	password;
	mouseoverLogin;

    constructor (private authService:AuthService, private router:Router) {

    }

    login(formValues) {
		//console.log(formValues); 
		this.authService.loginUser(formValues.userName, formValues.password); 
		// after the user has been authenticated route them back to the events page
		this.router.navigate(['branches']); 
	}
	
	cancel() {
		this.router.navigate(['branches']); 
	}
}