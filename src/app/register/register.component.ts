import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!: string;
  password!: string;
  result!: string;

  constructor (private dataService: DataService) {}

  ngOnInit(): void {

  }

  onRegister() {
    this.result = this.dataService.createUser(this.username, this.password)
  }
}
