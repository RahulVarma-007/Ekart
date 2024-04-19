import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChild2Component } from './test-child2.component';

describe('TestChild2Component', () => {
  let component: TestChild2Component;
  let fixture: ComponentFixture<TestChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
