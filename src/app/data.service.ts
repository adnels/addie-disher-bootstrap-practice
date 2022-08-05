import {Injectable} from '@angular/core';
import {IUser} from "./interface/IUser";
import {Subject} from "rxjs";
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser$ = new Subject<IUser | null>();

  userList: Array<IUser> = []

  onLogin(username: string, password: string) {
    const foundUser = this.userList.find(u => u.username === username);
    if (foundUser && foundUser.password === password) {
      this.currentUser$.next(foundUser)
    } //else {
      //return "invalid username and/or password";
    //}
  }

  onLogout() {
    this.currentUser$.next(null)
  }

  createUser(username: string, password: string): string {
    //data must pass guards below before rest of function will run
    if (!username || !password) {
      return "username and password cannot be blank";

    }
    if (username?.length < 3 || password?.length < 3) {
      return "username and password must be greater than 3 characters";
    }

    const foundUser = this.userList.find(u => u.username === username);
    if (foundUser) {
      return "username is taken";
    }

    const newUser: IUser = {
      id: uuid(),
      username: username,
    password: password
    }
    this.userList.push(newUser);
    return "account created";
  }
}

