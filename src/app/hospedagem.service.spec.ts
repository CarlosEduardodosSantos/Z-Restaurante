import { TestBed } from '@angular/core/testing';

import { HospedagemService } from './hospedagem.service';

describe('HospedagemService', () => {
  let service: HospedagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospedagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
