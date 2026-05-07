import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraBruno } from './calculadora-bruno/calculadora-bruno';

@Component({
  selector: 'app-root',
  imports: [ CalculadoraBruno],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('calculadoraBruno');
}
