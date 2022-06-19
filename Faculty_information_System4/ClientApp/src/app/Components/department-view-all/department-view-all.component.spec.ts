import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentViewAllComponent } from './department-view-all.component';

describe('DepartmentViewAllComponent', () => {
  let component: DepartmentViewAllComponent;
  let fixture: ComponentFixture<DepartmentViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
