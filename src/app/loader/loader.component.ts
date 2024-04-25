import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() imageArray!: string[];
  @Input() textArray!: string[];
  @Input() showLoader!: boolean;

  currentImageIndex: number = 0;
  currentText!: string;
  intervalTime: number;

  constructor() {
    this.intervalTime = 1000;
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
