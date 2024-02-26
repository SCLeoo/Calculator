import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private displayValSubj: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public displayVal$: Observable<string> = this.displayValSubj.asObservable();
  displayVal = '';

  constructor() { }

  updateCurrentValue(newValue: string) {
    this.displayValSubj.next(newValue);
  }

  inputVal(val: string){
    this.displayVal = this.displayVal + val;
    this.updateCurrentValue(this.displayVal);
  }
  clear(){
    this.displayVal = '';
    this.updateCurrentValue(this.displayVal);
  }
  solve(){
    if(this.displayVal === '') return;
    this.displayVal = eval(this.displayVal);
    this.updateCurrentValue(this.displayVal);
  }
}
