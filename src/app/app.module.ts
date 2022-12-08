import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


const modules = [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule];
const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule {}
