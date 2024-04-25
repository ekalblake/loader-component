import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, AboutPageRoutingModule],
})
export class AboutModule {}
