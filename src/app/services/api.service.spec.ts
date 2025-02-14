import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController

  //Verifica se tem alguma requisição pendente
  afterEach(() => {
    httpMock.verify();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data and return list of fruits', () => {
    const expectedFruits = ['uva', 'banana'];

    service.getFruits().subscribe(fruits => expect(fruits).toEqual(expectedFruits));

    const request = httpMock.expectOne('http://localhost:3000/fruits');
    expect(request.request.method).toBe('GET');
    request.flush(expectedFruits);
  })
});
