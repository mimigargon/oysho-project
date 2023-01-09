import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../core/services/products/products.service';
import { FilterProductPipe } from '../../shared/pipes/filter-product.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let service: ProductsService;
  const productsList = [
    { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
    { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
    { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
  ];

  let productServiceMock = { getProductsList: () => of(productsList) }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [CategoriesComponent, FilterProductPipe],
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
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductList and update productList', () => {
    component.getProductsList('123');
    expect(component.productList.length).toBe(3)
    expect(component.productList.length).toEqual(productsList.length);
  });

  it('onSort should sort the productList by high price', () => {
    component.productList = [{ id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('highPrice');
    expect(component.productList).toEqual([
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
    ]);
  });

  it('onSort should sort the productList by low price', () => {
    component.productList = [{ id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('lowPrice');
    expect(component.productList).toEqual([
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }
    ]);
  });
  it('onSort should sort the productList by name', () => {
    component.productList = [{ id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('Name');
    expect(component.productList).toEqual([
      { id: 789, name: 'Product 3', nameEn: 'Product 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] },
      { id: 456, name: 'Product 2', nameEn: 'Product 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 123, name: 'Product 1', nameEn: 'Product 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
    ]);
  })

});
