import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceTestComponent } from './ace-test.component';

describe('AceTestComponent', () => {
  let component: AceTestComponent;
  let fixture: ComponentFixture<AceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
