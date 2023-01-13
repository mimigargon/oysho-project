import { DetailComponent } from './detail.component';
import { ProductsService } from '../../core/services/products/products.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CartProduct } from '../../core/services/cart/models/cart.interface';
import { createComponentFactory, Spectator, byTestId } from '@ngneat/spectator/jest';
import { StoreModule } from '@ngrx/store';
import { StoreState } from '../../store/states/store.state';

describe('DetailComponent', () => {
  let spectator: Spectator<DetailComponent>
  let service: ProductsService;
  let route: ActivatedRoute;
  let store: MockStore;

  let initialState = {
    cart: {
      products: []
    }
  };

  const productsDetail = {
    id: 0,
    name: '',
    nameEn: '',
    image: [],
    longDescription: '',
    price: '',
    formattedPrice: '',
    color: []
  };
  let productServiceMock = { getProductDetails: () => of(productsDetail) }


  const createComponent = createComponentFactory({
    component: DetailComponent,
    imports: [
      RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({})
    ],
    declarations: [DetailComponent],
    providers: [
      provideMockStore({ initialState }),
      {
        provide: ProductsService,
        useValue: productServiceMock
      },
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: jest.fn()
            }
          }
        }
      }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  });

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.inject(ProductsService);
    route = spectator.inject(ActivatedRoute);
    store = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should set categoryId and productId from route params', () => {
    spectator.component.categoryId = '1';
    spectator.component.productId = '2';
    (route.snapshot.paramMap.get as jest.Mock).mockReturnValueOnce('1').mockReturnValueOnce('2');
    expect(spectator.component.categoryId).toEqual('1');
    expect(spectator.component.productId).toEqual('2');
  })

  it('should call getDetail if categoryId and productId are present', () => {
    spectator.component.categoryId = '1';
    spectator.component.productId = '2';
    const getDetailSpy = jest.spyOn(spectator.component, 'getDetail');
    spectator.component.ngOnInit();
    expect(getDetailSpy).toHaveBeenCalledWith('1', '2')
  });

  it('should call getDetail and update productDetails', () => {
    spectator.component.getDetail('1', '2');
    expect(spectator.component.productDetails).toEqual(productsDetail);
  });

  it('should dispatch an add products action', () => {
    const product: CartProduct = {
      id: 0,
      name: '',
      nameEn: '',
      image: [],
      longDescription: '',
      price: '',
      formattedPrice: '',
      color: [],
    };


    const addButton: Element = spectator.query(byTestId('addToCartBtn')) as Element;
    const addProductToCartSpy = jest.spyOn(spectator.component, 'addProductToCart')

    spectator.dispatchMouseEvent(addButton, 'click');
    expect(addProductToCartSpy).toHaveBeenCalledWith(product);
    store.select((state: StoreState) => state.cart).subscribe(state => {
      expect(state.products).toContainEqual(product)
    })
  });
});
