import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  callApi(miliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Accediendo a la otra página');
      }, miliseconds);
    });
  }
}
