import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { ProductsService } from '../services/products/products.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ApiProductsService } from '../services/products/api/api-products.service';
import { ApiCategories } from '../services/products/api/models/api-products.interface';


describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>
  let service: ProductsService;
  let apiService: ApiProductsService;

  const allCategories: ApiCategories = {

    categories: [
      {
        id: 1,
        name: 'cat1',
        nameEn: 'catEn1',
        shortDescription: null,
        description: null,
        keywords: null,
        key: 'cat',
        numberOfProducts: 2,
        type: 'type1',
        viewCategoryId: 1,
        subcategories: [],
        attachments: [],
        sequence: 1,
        oldsIds: [],
      },
      {
        id: 2,
        name: 'cat2',
        nameEn: 'catEn2',
        shortDescription: null,
        description: null,
        keywords: null,
        key: 'cat2',
        numberOfProducts: 2,
        type: 'type2',
        viewCategoryId: 2,
        subcategories: [],
        attachments: [],
        sequence: 2,
        oldsIds: [],
      },
    ],
  };

  let productServiceMock = { getCategories: () => of(allCategories) }

  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [
      HttpClientTestingModule
    ],
    declarations: [
      HeaderComponent
    ],
    providers: [
      ProductsService,
      {
        provide: ApiProductsService,
        useValue: productServiceMock
      }
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
    ]
  })

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.inject(ProductsService);
    apiService = spectator.inject(ApiProductsService);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should call getAllCategories on init', () => {
    spectator.component.ngOnInit();
    spectator.component.getAllCategories();
  })

  it('getCategories get categories from the subscription', () => {
    spectator.component.getAllCategories();
    expect(spectator.component.allCategories.length).toBe(2);
    expect(spectator.component.allCategories.length).toEqual(allCategories.categories.length)
  })

  it('toggle should return the opposite boolean value', () => {
    const originalValue = spectator.component.showCategories;
    spectator.component.showCategoriesToggle();
    expect(spectator.component.showCategories).toBe(!originalValue);
  });
});
