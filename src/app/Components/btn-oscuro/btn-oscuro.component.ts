import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-oscuro',
  standalone: true,
  imports: [Component, EventEmitter, Output],
  templateUrl: './btn-oscuro.component.html',
  styleUrls: ['./btn-oscuro.component.css']
})
export class BtnOscuroComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  onClick() {
    this.toggleDarkMode.emit();
  }
}