import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromCartActions from '../../store/actions/cart.actions';
import { DetailComponent } from './detail.component';
import { ProductsService } from '../../core/services/products/products.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CartProduct } from '../../core/services/cart/models/cart.interface';

jest.mock('@ngrx/store')

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
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


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    route = TestBed.inject(ActivatedRoute);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set categoryId and productId from route params', () => {
    component.categoryId = '1';
    component.productId = '2';
    (route.snapshot.paramMap.get as jest.Mock).mockReturnValueOnce('1').mockReturnValueOnce('2');
    expect(component.categoryId).toEqual('1');
    expect(component.productId).toEqual('2');
  })

  it('should call getDetail if categoryId and productId are present', () => {
    component.categoryId = '1';
    component.productId = '2';
    const getDetailSpy = jest.spyOn(component, 'getDetail');
    component.ngOnInit();
    expect(getDetailSpy).toHaveBeenCalledWith('1', '2')
  });

  it('should call getDetail and update productDetails', () => {
    component.getDetail('1', '2');
    expect(component.productDetails).toEqual(productsDetail);
  });

  it('should dispatch an add products action', () => {
    const product: CartProduct = {
      id: 1,
      name: 'Product 1',
      nameEn: 'Product 1',
      image: [''],
      longDescription: '',
      price: '10',
      formattedPrice: '10',
      color: [''],
    };

    component.addProduct(product);
    store.dispatch(fromCartActions.addProducts({ products: product }));
    const actions = store.scannedActions$;
    expect(actions).toEqual([fromCartActions.addProducts({ products: product })]);
  });
});
