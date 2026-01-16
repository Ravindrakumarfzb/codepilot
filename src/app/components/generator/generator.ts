import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
@Component({
  selector: 'app-generator',
  imports: [FormsModule],
  templateUrl: './generator.html',
  styleUrl: './generator.css',
})
export class Generator {
 code = '';
  type = 'CODE128';
  generate() {
    if (!this.code) return alert('Enter product code');

    JsBarcode('#barcode', this.code, {
      format: this.type,
      width: 2,
      height: 80,
      displayValue: true
    });
  }
}
