import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const modules = [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, NgbModule];
const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule { }
