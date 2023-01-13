import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';
import { Products } from 'src/app/core/services/products/models/products.interface';
import { FilterProductPipe } from './filter-product.pipe';

describe('FilterProductPipe', () => {
  let spectator: SpectatorPipe<FilterProductPipe>;
  const createPipe = createPipeFactory(FilterProductPipe);

  it('create an instance', () => {
    expect(spectator.element).toBeTruthy();
  });

  it('should transform value of filter to lowerCase and filter the array', () => {
    const list = [
      {
        name: 'Bra',
      },
      {
        name: 'T-Shirt',
      },
      {
        name: 'Skirt',
      },
      {
        name: 'Dress',
      },
      {
        name: 'Pants',
      }
    ];

    let filter: string = 'Bra ';
    let filteredProducts: Products[] = [];

    spectator = createPipe(`{{list | filterProduct: filter}}`)
    expect(filter).toEqual('bra');
    expect(filteredProducts).toContain('bra')
  })
});