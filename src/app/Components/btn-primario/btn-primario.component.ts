import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  imports: [Component, EventEmitter, Output],
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}