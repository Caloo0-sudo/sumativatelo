import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [Component, EventEmitter, Output, FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  @Output() passwordChange = new EventEmitter<string>();

  onInputChange() {
    this.passwordChange.emit(this.password);
  }
}