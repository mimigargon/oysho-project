import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './pages/cart/cart.component';
import { StoreModule } from '@ngrx/store';


const modules = [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, NgbModule, StoreModule];
const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule { }
