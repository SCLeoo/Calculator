import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { CalcComponent } from './calc/calc.component';
import { Calc2Component } from './calc2/calc2.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    CalcComponent,
    Calc2Component
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
