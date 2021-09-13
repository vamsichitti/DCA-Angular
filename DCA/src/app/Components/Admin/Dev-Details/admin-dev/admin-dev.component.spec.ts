import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDevComponent } from './admin-dev.component';

describe('AdminDevComponent', () => {
  let component: AdminDevComponent;
  let fixture: ComponentFixture<AdminDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
