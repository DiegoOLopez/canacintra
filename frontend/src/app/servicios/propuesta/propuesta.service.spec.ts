import { TestBed } from '@angular/core/testing';
import { PropuestaService } from './propuesta.service';

describe('propuestaService', () => {
  let service: PropuestaService;

  beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(PropuestaService);
        });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
