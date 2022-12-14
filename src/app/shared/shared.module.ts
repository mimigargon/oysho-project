import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [CommonModule, ReactiveFormsModule, FormsModule]
const components = [CardComponent]
const pipes = [FilterProductPipe]

@NgModule({
  declarations: [
    ...components,
    ...pipes

  ],
  imports: [
    ...modules
  ],
  exports: [...pipes, ...components]
})
export class SharedModule { }
