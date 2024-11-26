import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AceTestComponent } from './ace-test/ace-test.component';
import { CodeEditorTestComponent } from './code-mirror-test/code-mirror-test.component';
import { monacoEditorTestComponent } from './monaco-editor-test/monaco-editor-test.component';

// Ace
import { AceModule } from 'ngx-ace-wrapper';
import { ACE_CONFIG } from 'ngx-ace-wrapper';
import { AceConfigInterface } from 'ngx-ace-wrapper';

// Monaco Editor
import {
  NGX_MONACO_EDITOR_CONFIG,
  NgxMonacoEditorConfig,
} from 'ngx-monaco-editor-v2';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {};
const DEFAULT_MONACO_CONFIG: NgxMonacoEditorConfig = {};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AceModule,
    AceTestComponent,
    CodeEditorTestComponent,
    monacoEditorTestComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: DEFAULT_MONACO_CONFIG,
    },
  ],
})
export class AppComponent {
  title = 'editor-on-angular';
}
