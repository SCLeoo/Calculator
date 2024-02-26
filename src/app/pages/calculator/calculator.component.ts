import { Component, OnInit } from '@angular/core';
import data1 from '../../../assets/buttonsList.json'
import data2 from '../../../assets/buttonsList2.json'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calcData1 = data1;
  calcData2 = data2;
  displayVal = '';

  constructor() { }

  ngOnInit(): void {
  }

  executeMethod(methodString: string) {
    eval(`this.${methodString}`);
  }
  inputVal(val: string){
    this.displayVal = this.displayVal + val;
  }
  clear(){
    this.displayVal = '';
  }
  solve(){
    if(this.displayVal === '') return;
    this.displayVal = eval(this.displayVal);
  }
}
