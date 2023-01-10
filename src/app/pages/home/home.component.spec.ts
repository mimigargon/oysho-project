import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductsService } from '../../core/services/products/products.service';
import { of } from 'rxjs';
import { ApiProductsService } from '../../core/services/products/api/api-products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiCategories } from '../../core/services/products/api/models/api-products.interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ProductsService;
  const allCategories = [
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
  ];
  let productServiceMock = { getCategories: () => of(allCategories) }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: productServiceMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getCategory update the value of mumCategoryID and vacationCategoryID', () => {
    component.mumCategoryID = '1';
    component.vacationCategoryID = '2';
    jest.spyOn(service, 'getCategories').mockReturnValue(of(allCategories));
    component.getCategory();
    expect(component.mumCategoryID).toEqual(allCategories[0].id.toString());
    expect(component.vacationCategoryID).toEqual(allCategories[1].id.toString());
  })
});
