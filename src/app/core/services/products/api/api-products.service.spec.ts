import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ApiProductsService } from './api-products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from 'src/environments/environment';

describe('ApiProductsService', () => {
  let spectator: SpectatorService<ApiProductsService>;
  let httpMock: HttpTestingController;

  const createService = createServiceFactory({
    service: ApiProductsService,
    imports: [HttpClientTestingModule],
    providers: [ApiProductsService],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
  })

  beforeEach(() => {
    spectator = createService();
    httpMock = spectator.inject(HttpTestingController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});