import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResponseComponent } from './create-response.component';

describe('CreateResponseComponent', () => {
  let component: CreateResponseComponent;
  let fixture: ComponentFixture<CreateResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
