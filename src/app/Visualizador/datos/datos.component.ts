import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [Component, EventEmitter, Output, FormsModule, BrowserModule],
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  password: string = '';
  email: string = '';
  texto: string = '';
  animationActive: boolean = false;

  updatePassword(value: string) {
    this.password = value;
  }

  updateEmail(value: string) {
    this.email = value;
  }

  updateTexto(value: string) {
    this.texto = value;
  }

  triggerAnimation() {
    this.animationActive = true;
    setTimeout(() => {
      this.animationActive = false;
    }, 1000); // Duración de la animación
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}