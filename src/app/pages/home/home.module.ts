import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const components = [HomeComponent];
const modules = [CommonModule, HomeRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class HomeModule {}