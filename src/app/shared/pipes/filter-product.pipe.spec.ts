import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';
import { Products } from 'src/app/core/services/products/models/products.interface';
import { FilterProductPipe } from './filter-product.pipe';
import { CategoriesComponent } from '../../pages/categories/categories.component';

describe('FilterProductPipe', () => {
  let spectator: SpectatorPipe<FilterProductPipe, CategoriesComponent>;
  const createPipe = createPipeFactory(FilterProductPipe);

  it('should exist', () => {
    spectator = createPipe();
    expect(spectator.element).toBeTruthy();
  })


});