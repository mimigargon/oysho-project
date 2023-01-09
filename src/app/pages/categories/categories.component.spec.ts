import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../core/services/products/products.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [CategoriesComponent],
      providers: [ProductsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductsList with the correct category ID', () => {
    const spy = jest.spyOn(component, 'getProductsList');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(component.categoriesID)
  });

  it('should call getProductList and update productList', () => {
    const spy = jest.spyOn(TestBed.inject(ProductsService), 'getProductsList');
    const expectedProductList = [{ id: '123', name: 'Product 1' }, { id: '456', name: 'Bproduct 2' }];
    component.getProductsList('123');
    expect(spy).toHaveBeenCalledWith('123');
    expect(component.productList).toEqual(expectedProductList);
  });

  it('onSort should sort the productList by high price', () => {
    component.productList = [{ id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('highPrice');
    expect(component.productList).toEqual([
      { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
    ]);
  });

  it('onSort should sort the productList by low price', () => {
    component.productList = [{ id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('lowPrice');
    expect(component.productList).toEqual([
      { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] },
      { id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }
    ]);
  });
  it('onSort should sort the productList by name', () => {
    component.productList = [{ id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] }, { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] }, { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }];
    component.onSort('Name');
    expect(component.productList).toEqual([
      { id: 123, name: 'Aproduct 1', nameEn: 'Aproduct 1', image: [''], longDescription: '', price: '100', formattedPrice: '100', color: [''] },
      { id: 456, name: 'Bproduct 2', nameEn: 'Bproduct 2', image: [''], longDescription: '', price: '200', formattedPrice: '200', color: [''] },
      { id: 789, name: 'Cproduct 3', nameEn: 'Cproduct 3', image: [''], longDescription: '', price: '50', formattedPrice: '50', color: [''] }
    ]);
  })

});
