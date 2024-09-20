import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomadminComponent } from './homadmin.component';

describe('HomadminComponent', () => {
  let component: HomadminComponent;
  let fixture: ComponentFixture<HomadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
