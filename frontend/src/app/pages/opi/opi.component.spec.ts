import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpiComponent } from './opi.component';

describe('OpiComponent', () => {
  let component: OpiComponent;
  let fixture: ComponentFixture<OpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
