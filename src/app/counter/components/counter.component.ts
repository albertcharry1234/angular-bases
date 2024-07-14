import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{counter}} </h3>
    <button (click)="restar(2)" >-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="sumar(2)">+1</button>
  `
})

export class CounterComponent {

  public  counter: number = 10;

  sumar(value: number): void{
    this.counter  += 1
  }
  restar(value: number): void{
    this.counter  -= 1
  }
  resetCounter():void{
    this.counter = 10;
  }


}
