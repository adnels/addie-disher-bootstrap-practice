import {Component, TemplateRef} from '@angular/core';
import {DataService} from "./data.service";
import {IUser} from "./interface/IUser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  currentUser: IUser | null = null;

  constructor(private dataService: DataService, private modalService: NgbModal) {
    this.dataService.currentUser$.subscribe(nextValue =>  this.currentUser = nextValue)
  }

  open(login: TemplateRef<any>) {
    this.modalService.open(login);
  }
}
