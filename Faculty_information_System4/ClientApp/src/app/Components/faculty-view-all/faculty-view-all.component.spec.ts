import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewAllComponent } from './faculty-view-all.component';

describe('FacultyViewAllComponent', () => {
  let component: FacultyViewAllComponent;
  let fixture: ComponentFixture<FacultyViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
