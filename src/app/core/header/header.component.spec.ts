import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { CategoriesElements } from '../services/products/models/products.interface';
import { ProductsService } from '../services/products/products.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const allCategories: CategoriesElements[] = [
  {
    id: 0,
    name: '',
    nameEn: '',
    description: null
  },
  {
    id: 1,
    name: '',
    nameEn: '',
    description: null
  },
  {
    id: 2,
    name: '',
    nameEn: '',
    description: null
  },
]

const productServiceMock = {
  getAllCategories: () => of(allCategories)
}

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
        {
          provide: ProductsService,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCategories get categories from the subscription', () => {
    component.getAllCategories();
    expect(component.allCategories!.length).toBe(3);
    expect(component.allCategories).toEqual(allCategories);
  })

  it('toggle should return the opposite boolean value', () => {
    const originalValue = component.showCategories;
    component.showCategoriesToggle();
    expect(component.showCategories).toBe(!originalValue);
  });
});
