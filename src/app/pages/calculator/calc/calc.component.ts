import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  @Input() calcData: any;
  display = '';
  constructor(private calcService: CalculatorService) { }

  ngOnInit(): void {
    this.calcService.displayVal$.subscribe(value => {
      this.display = value;
    });
  }

  executeMethod(methodString: string) {
    eval(`this.calcService.${methodString}`);
  }
}
