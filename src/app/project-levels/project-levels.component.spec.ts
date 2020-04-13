import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLevelsComponent } from './project-levels.component';

describe('ProjectLevelsComponent', () => {
  let component: ProjectLevelsComponent;
  let fixture: ComponentFixture<ProjectLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
