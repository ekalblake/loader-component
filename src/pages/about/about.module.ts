import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, FormsModule, IonicModule, AboutPageRoutingModule],
})
export class AboutModule {}
