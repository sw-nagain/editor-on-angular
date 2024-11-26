import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-monaco-editor-test',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './monaco-editor-test.component.html',
  styleUrl: './monaco-editor-test.component.css',
})
export class monacoEditorTestComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };

  // サンプルコード
  code = `const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : \`Sorry, we don't sell ${name}.\`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
`;
}
