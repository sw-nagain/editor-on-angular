import { ComponentFixture, TestBed } from '@angular/core/testing';

import { monacoEditorTestComponent } from './monaco-editor-test.component';

describe('monacoEditorTestComponent', () => {
  let component: monacoEditorTestComponent;
  let fixture: ComponentFixture<monacoEditorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [monacoEditorTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(monacoEditorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
