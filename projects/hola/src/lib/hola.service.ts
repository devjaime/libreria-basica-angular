import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  constructor() {
    console.log('Hola');
  }
}
