import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFinalComponent } from './dashboard-final.component';

describe('DashboardFinalComponent', () => {
  let component: DashboardFinalComponent;
  let fixture: ComponentFixture<DashboardFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
