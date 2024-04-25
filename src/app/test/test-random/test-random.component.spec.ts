import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRandomComponent } from './test-random.component';

describe('TestRandomComponent', () => {
  let component: TestRandomComponent;
  let fixture: ComponentFixture<TestRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
