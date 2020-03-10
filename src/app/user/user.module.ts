// This module is lazy loaded...see app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
// Get access to TemplateBased form properties
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component'; 
import { LoginComponent } from './login.component'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UserModule {
    
}