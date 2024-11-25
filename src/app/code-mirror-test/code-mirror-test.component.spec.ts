import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorTestComponent } from './code-mirror-test.component';

describe('CodeEditorTestComponent', () => {
  let component: CodeEditorTestComponent;
  let fixture: ComponentFixture<CodeEditorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeEditorTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeEditorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
