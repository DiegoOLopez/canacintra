import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNegocioComponent } from './home-negocio.component';

describe('HomeNegocioComponent', () => {
  let component: HomeNegocioComponent;
  let fixture: ComponentFixture<HomeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNegocioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
