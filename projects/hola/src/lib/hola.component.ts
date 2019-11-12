import { Component, OnInit } from '@angular/core';
import { HolaService } from './hola.service';

@Component({
  selector: 'hl-hola',
  template: `
    <p>
      Botón de pago
    </p>
  `,
  styles: []
})
export class HolaComponent implements OnInit {

  constructor(private h: HolaService) { }

  ngOnInit() {
  }

}
