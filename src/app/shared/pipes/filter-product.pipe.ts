import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/core/services/products/models/products.interface';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(list: Products[], filter: string = ''): Products[] {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredProducts: Products[] = list.filter((product: Products) => {
      return product.name.toLowerCase().includes(lowerCaseFilter);
    })
    return filteredProducts;
  }

}
