import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Maria Doe' },
    ]

    constructor() {

    }

    getUsers() {
        return of(this.users)
    }
}