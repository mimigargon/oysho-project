import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { ProductsService } from '../services/products/products.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ApiProductsService } from '../services/products/api/api-products.service';
import { ApiCategories } from '../services/products/api/models/api-products.interface';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let apiService: ApiProductsService;
  let service: ProductsService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiProductsService);
    service = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCategories get categories from the subscription', () => {
    component.getAllCategories();
    expect(component.allCategories.length).toBe(2);
    expect(component.allCategories.length).toEqual(allCategories.categories.length)
  })

  it('toggle should return the opposite boolean value', () => {
    const originalValue = component.showCategories;
    component.showCategoriesToggle();
    expect(component.showCategories).toBe(!originalValue);
  });
});
