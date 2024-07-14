import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'iroman';
  public edad : number =  35;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero():void{
    this.name = 'Batman';
  }

  changeAge():void{
    this.edad = 30;
  }

  reset(): void{

      this.name = "ironman";
      this.edad = 45;
  }

}
