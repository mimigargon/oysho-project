import { Component, Input } from '@angular/core';
import { Products } from 'src/app/core/services/products/models/products.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Products
}
