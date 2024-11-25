import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Ace
import { AceModule } from 'ngx-ace-wrapper';
import { ACE_CONFIG } from 'ngx-ace-wrapper';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import { AceTestComponent } from './ace-test/ace-test.component';
import { CodeEditorTestComponent } from './code-editor-test/code-mirror-test.component';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AceModule, AceTestComponent, CodeEditorTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class AppComponent {
  title = 'editor-on-angular';
}
