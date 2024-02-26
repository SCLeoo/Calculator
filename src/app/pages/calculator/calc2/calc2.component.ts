import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.scss']
})
export class Calc2Component implements OnInit {

  /**
   * Input value
   */
  @Input() calcData: any;
  displayVal = '';

  constructor() { }

  ngOnInit(): void {
  }

  executeMethod(methodString: string) {
    eval(`this.${methodString}`);
  }
  /**
   * Funcion
   * @param val parametro
   */
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
