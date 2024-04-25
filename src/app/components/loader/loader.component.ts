import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() showLoader!: boolean;

  imageArray: string[];
  textArray: string[];
  currentImageIndex: number = 0;
  currentText!: string;
  intervalTime: number;

  constructor() {
    this.intervalTime = 1000;
    this.imageArray = [
      'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    ];

    this.textArray = [
      'Cargando...',
      'Espera...',
      'Ya casi...',
      'Redireccionando...',
    ];
  }

  ngOnInit() {
    this.startImageSequence();
  }

  startImageSequence() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageArray.length;
      this.currentText = this.textArray[this.currentImageIndex];
    }, this.intervalTime);
  }

  setResult() {
    this.showLoader = false;
  }
}
