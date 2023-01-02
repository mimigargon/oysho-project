import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [CartComponent];
const modules = [CommonModule, CartRoutingModule, SharedModule, ReactiveFormsModule, FormsModule];

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class CartModule { }