import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCompComponent } from './async-comp.component';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';

const expectedApiFruits = ['uva', 'morango']

fdescribe('AsyncCompComponent', () => {
  let component: AsyncCompComponent;
  let fixture: ComponentFixture<AsyncCompComponent>;
  let apiServiceMock: jasmine.SpyObj<ApiService>

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getFruits'])
    apiServiceMock.getFruits.and.returnValue(of(expectedApiFruits))

    await TestBed.configureTestingModule({
      imports: [AsyncCompComponent],
      providers: [{ provide: ApiService, useValue: apiServiceMock}]
    })
    .compileComponents();

    apiServiceMock = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>
    fixture = TestBed.createComponent(AsyncCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fruits api on Init', () => {
    expect(apiServiceMock.getFruits).toHaveBeenCalled()
  })
});
