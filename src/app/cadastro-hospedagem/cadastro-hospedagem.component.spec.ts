import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHospedagemComponent } from './cadastro-hospedagem.component';

describe('CadastroHospedagemComponent', () => {
  let component: CadastroHospedagemComponent;
  let fixture: ComponentFixture<CadastroHospedagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHospedagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHospedagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
