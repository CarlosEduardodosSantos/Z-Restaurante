import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteHospedagemComponent } from './restaurante-hospedagem.component';

describe('RestauranteHospedagemComponent', () => {
  let component: RestauranteHospedagemComponent;
  let fixture: ComponentFixture<RestauranteHospedagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteHospedagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteHospedagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
