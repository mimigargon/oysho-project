import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailComponent } from './detail.component';
import { NgbCarousel, NgbCarouselModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreModule } from 'src/app/store/store.module';



const components = [DetailComponent];

const modules = [CommonModule, DetailsRoutingModule, NgbCarouselModule, NgbCarousel, NgbSlide];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components]
})
export class DetailsModule { }
