import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-bruno',
  imports: [FormsModule],
  templateUrl: './calculadora-bruno.html',
  styleUrl: './calculadora-bruno.scss',
})
export class CalculadoraBruno {

 numero1: number = 0;
 numero2: number = 0;
 result: number = 0;
 operacao: string = 'soma';

 calcular(){
  switch(this.operacao){
    case 'soma':
      this.result = this.numero1 + this.numero2;
    break;
    case 'subtracao':
      this.result = this.numero1 - this.numero2;
    break;
    case 'multiplicacao':
      this.result = this.numero1 * this.numero2;
    break;
    case 'divisao':
      if (this.numero2 !== 0) {
        this.result = this.numero1 / this.numero2;
      } else {
        alert('Divisão por zero não é permitida!');
      }
    break;
  }
 }
}

