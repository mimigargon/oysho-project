import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [HeaderComponent, FooterComponent];
const modules = [CommonModule, AppRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components]
})
export class CoreModule {}
