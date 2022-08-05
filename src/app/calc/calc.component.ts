import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {


  numOne: number = 0;
  numTwo: number = 0;
  result!: number;

  @Input() selectedOperation!: string;
  operation!: Function;

  constructor() {
    this.setOperation(this.selectedOperation);
  }

  ngOnInit(): void {
  }

  performOperation(): void{
    this.result = this.operation(this.numOne, this.numTwo);
  }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multi(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    return num1 / num2;
  }

  setOperation(operationName: string) {
    switch (operationName) {
      case "-":
        this.operation = this.subtract;
        break;
      case "*":
        this.operation = this.multi;
        break;
      case "/":
        this.operation = this.divide;
        break;
      default:
        this.operation = this.add
    }
  }

}
