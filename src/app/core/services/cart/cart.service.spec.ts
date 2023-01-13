import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { CartProduct } from './models/cart.interface';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
  let spectator: SpectatorService<CartService>
  let httpMock: HttpTestingController;

  const createService = createServiceFactory({
    service: CartService,
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


  beforeEach(() => {
    spectator = createService();
    httpMock = spectator.inject(HttpTestingController);
  })

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    localStorage.clear();
    httpMock.verify();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('setProducts set products in localStorage ', () => {
    let product: CartProduct = {
      id: 1,
      name: '',
      nameEn: '',
      image: [],
      longDescription: '',
      price: '',
      formattedPrice: '',
      color: []
    };

    spectator.service.setProducts(product);
    let cartProducts: CartProduct[] = JSON.parse(localStorage.getItem('cartProducts')!) as CartProduct[] || [];
    expect(cartProducts.length).toBeGreaterThan(0);
    expect(cartProducts).toContainEqual(product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    expect(cartProducts.length).toEqual(1);
  });

  it('getProducts get products from localStorage ', () => {
    localStorage.setItem('cartProduct', JSON.stringify(allCartProducts));
    spectator.service.getProducts();
  })
});
