import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [Component, EventEmitter, Output, FormsModule],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  texto: string = '';
  @Output() textoChange = new EventEmitter<string>();

  onInputChange() {
    this.textoChange.emit(this.texto);
  }
}