import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { ProductsService } from '../services/products/products.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCategories get categories from the subscription', () => {
    const spy = jest.spyOn(TestBed.inject(ProductsService), 'getCategories');
    const expectedCategories = [{ id: 123, name: 'Category 1', nameEn: 'Category 1', description: '' }, { id: 456, name: 'Category 2', nameEn: 'Category 2', description: '' }];
    component.getAllCategories();
    expect(spy).toHaveBeenCalled();
    expect(component.allCategories).toEqual(expectedCategories)
  })

  it('toggle should return the opposite boolean value', () => {
    const originalValue = component.showCategories;
    component.showCategoriesToggle();
    expect(component.showCategories).toBe(!originalValue);
  });
});
