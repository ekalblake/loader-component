import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private router: Router) {}

  callApi(miliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Resolviendo la promesa con los datos de los usuarios
        resolve('Accediendo a la otra página');
      }, miliseconds);
    });
  }
}
