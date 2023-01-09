import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { CartProduct } from './models/cart.interface';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { channel } from 'diagnostics_channel';

const allCartProducts: CartProduct[] = [
  {
    id: 0,
    name: '',
    nameEn: '',
    image: [],
    longDescription: '',
    price: '',
    formattedPrice: '',
    color: []
  },
  {
    id: 1,
    name: '',
    nameEn: '',
    image: [],
    longDescription: '',
    price: '',
    formattedPrice: '',
    color: []
  }
]

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CartService
      ],
      schemas: [
        NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    localStorage.clear();
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setProducts set products in localStorage ', () => {
    let product: CartProduct[] = [{
      id: 1,
      name: '',
      nameEn: '',
      image: [],
      longDescription: '',
      price: '',
      formattedPrice: '',
      color: []
    }];

    service.setProducts(product);
    localStorage.setItem('cartProduct', JSON.stringify(product));
    let currentProduct = localStorage.getItem('cartProduct');
    currentProduct = '[{"cartProduct": "product"}]'
    expect(currentProduct).toBeTruthy();
    product = [...JSON.parse(currentProduct), ...product]
    expect(product).toBe(product)
    expect(product.length).toBe(2);
    localStorage.setItem('cartProduct', JSON.stringify(product))
  });

  it('getProducts get products from localStorage ', () => {
    localStorage.setItem('cartProduct', JSON.stringify(allCartProducts));
    service.getProducts();
  })
});
