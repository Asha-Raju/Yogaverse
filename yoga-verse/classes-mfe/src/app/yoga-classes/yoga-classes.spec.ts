import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaClasses } from './yoga-classes';

describe('YogaClasses', () => {
  let component: YogaClasses;
  let fixture: ComponentFixture<YogaClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaClasses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaClasses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
