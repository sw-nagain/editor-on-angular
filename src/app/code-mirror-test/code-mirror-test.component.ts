import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeEditor } from '@acrodata/code-editor';
import { languages } from '@codemirror/language-data';

@Component({
  selector: 'app-code-mirror-test',
  standalone: true,
  imports: [FormsModule, CodeEditor],
  templateUrl: './code-mirror-test.component.html',
  styleUrl: './code-mirror-test.component.css',
})
export class CodeEditorTestComponent {
  languages = languages; // 言語データ

  // サンプルコード
  value = `const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : \`Sorry, we don't sell ${name}.\`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
`;
}
