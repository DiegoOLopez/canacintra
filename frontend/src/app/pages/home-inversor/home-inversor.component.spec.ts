import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInversorComponent } from './home-inversor.component';

describe('HomeInversorComponent', () => {
  let component: HomeInversorComponent;
  let fixture: ComponentFixture<HomeInversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInversorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
