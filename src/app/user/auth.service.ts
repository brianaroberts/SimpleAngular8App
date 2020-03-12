import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Bruce',
            lastName: 'Wayne',
            emailAddress: 'bruce.wayne@batcave.com',
            phoneNumber: '(000) 111-2222',
            address: '100 Bruce Street',
            city: 'Gotham',
            state: 'MA',
            zipCode: 11111
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string, emailAddress: string, phoneNumber:string,
        address:string, city:string, state:string, zipCode: number) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        this.currentUser.emailAddress = emailAddress;
        this.currentUser.address = address;
        this.currentUser.city = city;
        this.currentUser.state = state;
        this.currentUser.zipCode = zipCode;
        this.currentUser.phoneNumber = phoneNumber;
    }
}