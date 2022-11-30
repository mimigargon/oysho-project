import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailComponent } from './detail.component';

const components = [DetailComponent];

const modules = [CommonModule, DetailsRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class DetailsModule {}
