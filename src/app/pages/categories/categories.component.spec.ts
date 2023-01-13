import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CategoriesComponent } from './categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../core/services/products/products.service';
import { FilterProductPipe } from '../../shared/pipes/filter-product.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


describe('CategoriesComponent', () => {
  let spectator: Spectator<CategoriesComponent>;
  let service: ProductsService;
  let route: ActivatedRoute;

  const productsList = [
    { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
    { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
    { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
  ];

  let productServiceMock = { getProductsList: () => of(productsList) }

  const createComponent = createComponentFactory({
    component: CategoriesComponent,
    imports: [
      RouterTestingModule, HttpClientTestingModule
    ],
    declarations: [CategoriesComponent, FilterProductPipe],
    providers: [
      {
        provide: ProductsService,
        useValue: productServiceMock
      },
      {
        provide: ActivatedRoute, useValue: {
          snapshot: {
            paramMap: {
              get: jest.fn()
            }
          }
        }
      },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  })

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.inject(ProductsService);
    route = spectator.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should set categoriesID from route params', () => {
    spectator.component.categoriesID = '1';
    (route.snapshot.paramMap.get as jest.Mock).mockReturnValueOnce('1');
    expect(spectator.component.categoriesID).toEqual('1');
    expect(spectator.component.categoriesID).toBeTruthy();
    const productsList = jest.spyOn(spectator.component, 'getProductsList')
    spectator.component.ngOnInit();
    expect(productsList).toHaveBeenCalledWith('1');
  })

  it('should call getProductList and update productList', () => {
    spectator.component.getProductsList('123');
    expect(spectator.component.productList.length).toBe(3)
    expect(spectator.component.productList.length).toEqual(productsList.length);
  });

  it('onSort should sort the productList by high price', () => {
    spectator.component.productList = [{ id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    spectator.component.onSort('highPrice');
    expect(spectator.component.productList).toEqual([
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
    ]);
  });

  it('onSort should sort the productList by low price', () => {
    spectator.component.productList = [{ id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    spectator.component.onSort('lowPrice');
    expect(spectator.component.productList).toEqual([
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }
    ]);
  });
  it('onSort should sort the productList by name', () => {
    spectator.component.productList = [{ id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    spectator.component.onSort('Name');
    expect(spectator.component.productList).toEqual([
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] },
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
    ]);
  })

});
