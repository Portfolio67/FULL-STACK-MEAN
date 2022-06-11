import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListingComponent } from './trip-listing.component';

describe('TripListingComponent', () => {
  let component: TripListingComponent;
  let fixture: ComponentFixture<TripListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
