import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  imports: [Component, EventEmitter, Output],
  templateUrl: './btn-cancelar.component.html',
  styleUrls: ['./btn-cancelar.component.css']
})
export class BtnCancelarComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}