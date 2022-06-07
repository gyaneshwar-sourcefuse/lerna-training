import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAutheCallbackComponent } from './google-authe-callback.component';

describe('GoogleAutheCallbackComponent', () => {
  let component: GoogleAutheCallbackComponent;
  let fixture: ComponentFixture<GoogleAutheCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAutheCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAutheCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
