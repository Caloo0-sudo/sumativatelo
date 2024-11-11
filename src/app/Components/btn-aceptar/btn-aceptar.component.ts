import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  imports: [EventEmitter, Output],
  templateUrl: './btn-aceptar.component.html',
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}