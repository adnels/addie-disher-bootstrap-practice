import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.css']
})
export class Calc2Component implements OnInit {

  result!: number;
  numOne: number = 0;
  numTwo: number = 0;
  selectedOperation: string = "+"

  constructor() { }

  ngOnInit(): void {
  }

  performOperation() {
    switch (this.selectedOperation) {
      case "+":
        this.result = this.numOne + this.numTwo;
        break;
      case "-":
        this.result = this.numOne - this.numTwo;
        break;
      case "*":
        this.result = this.numOne * this.numTwo;
        break;
      case "/":
        this.result = this.numOne / this.numTwo;
        break;
      default:
        console.error('unknown operation')
    }
  }

}
