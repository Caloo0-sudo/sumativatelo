import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [Component, EventEmitter, Output, FormsModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';
  @Output() emailChange = new EventEmitter<string>();

  onInputChange() {
    this.emailChange.emit(this.email);
  }
}