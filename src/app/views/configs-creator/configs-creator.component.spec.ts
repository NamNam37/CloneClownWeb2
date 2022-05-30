import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsCreatorComponent } from './configs-creator.component';

describe('ConfigsCreatorComponent', () => {
  let component: ConfigsCreatorComponent;
  let fixture: ComponentFixture<ConfigsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigsCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
