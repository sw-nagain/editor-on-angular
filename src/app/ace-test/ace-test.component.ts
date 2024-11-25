import { Component } from '@angular/core';
import { AceConfigInterface, AceModule } from 'ngx-ace-wrapper';

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

@Component({
  selector: 'app-ace-test',
  standalone: true,
  imports: [AceModule],
  templateUrl: './ace-test.component.html',
  styleUrl: './ace-test.component.css',
})
export class AceTestComponent {
  // Aceのローカル設定（グローバル設定を上書き）
  config: AceConfigInterface = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
  };

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
