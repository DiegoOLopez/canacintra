import { TestBed } from '@angular/core/testing';

import { oportunidadService } from './oportunidad.service';

describe('PropuestaService', () => {
  let service: oportunidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(oportunidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
