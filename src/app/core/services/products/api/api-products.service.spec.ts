import { TestBed } from '@angular/core/testing';

import { ApiProductsService } from './api-products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiProductsService', () => {
  let service: ApiProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});