import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoader: boolean = false;
  inputValue!: number;
  intervalTime!: number;

  constructor(
    private toastController: ToastController,
    private homeService: HomeService,
    private router: Router
  ) {}

  async startLoader() {
    if (!this.inputValue) {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce un número',
        color: 'danger',
        duration: 1500,
        position: 'bottom',
      });

      return await toast.present();
    }

    this.showLoader = true;
    let miliseconds = this.inputValue * 1000;

    this.homeService.callApi(miliseconds).then((data) => {
      this.showLoader = false;
      this.router.navigate(['/about']);
    });
  }
}
