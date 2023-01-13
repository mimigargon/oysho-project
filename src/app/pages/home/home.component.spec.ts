import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HomeComponent } from './home.component';
import { ProductsService } from '../../core/services/products/products.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  let service: ProductsService;

  const allCategories = [
    {
      id: 1,
      name: 'MUM',
      nameEn: 'MUM',
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
      name: 'VACATION SHOP',
      nameEn: 'VACATION SHOP',
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
  ];

  let productServiceMock = { getCategories: () => of(allCategories) }

  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [HttpClientTestingModule],
    declarations: [HomeComponent],
    providers: [
      {
        provide: ProductsService,
        useValue: productServiceMock
      }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  })

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.inject(ProductsService);;
  })

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should getCategory update the value of mumCategoryID and vacationCategoryID', () => {
    const spy = jest.spyOn(service, 'getCategories').mockReturnValue(of(allCategories));
    const categories = spectator.component.categories;
    spectator.component.ngOnInit();
    spectator.component.getCategory();
    expect(categories).toEqual(allCategories);
    expect(categories[0].name).toEqual('MUM');
    expect(spectator.component.mumCategoryID).toEqual(categories[0].id.toString())
    expect(categories[1].name).toEqual('VACATION SHOP');
    expect(spectator.component.vacationCategoryID).toEqual(categories[1].id.toString())
  });

  it('should not ser categoty ids for mumCategoryID and vacationCategoryID', () => {
    allCategories[0].name = '';
    allCategories[1].name = '';
    spectator.component.mumCategoryID = '';
    spectator.component.vacationCategoryID = '';


    spectator.component.ngOnInit();
    spectator.component.getCategory();
    expect(allCategories[0].name).not.toEqual('MUM');
    expect(spectator.component.mumCategoryID).not.toEqual('1');
    expect(allCategories[1].name).not.toEqual('VACATION SHOP');
    expect(spectator.component.vacationCategoryID).not.toEqual('2');
  })
});
