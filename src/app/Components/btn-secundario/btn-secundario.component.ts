import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  imports: [Component, EventEmitter, Output],
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.css']
})
export class BtnSecundarioComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}