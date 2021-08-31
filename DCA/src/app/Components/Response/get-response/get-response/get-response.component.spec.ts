import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResponseComponent } from './get-response.component';

describe('GetResponseComponent', () => {
  let component: GetResponseComponent;
  let fixture: ComponentFixture<GetResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
