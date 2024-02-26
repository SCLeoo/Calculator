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

  /**
   * Hola
   */
  ngOnInit(): void {
  }
}
