import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiconsumoComponent } from './apiconsumo.component';

describe('ApiconsumoComponent', () => {
  let component: ApiconsumoComponent;
  let fixture: ComponentFixture<ApiconsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiconsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
