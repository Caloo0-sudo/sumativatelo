import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnPrimarioComponent } from './Components/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from './Components/btn-secundario/btn-secundario.component';
import { BtnAceptarComponent } from './Components/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from './Components/btn-cancelar/btn-cancelar.component';
import { BtnOscuroComponent } from './Components/btn-oscuro/btn-oscuro.component';
import { PasswordComponent } from './Inputs/password/password.component';
import { EmailComponent } from './Inputs/email/email.component';
import { TextoComponent } from './Inputs/texto/texto.component';
import { DatosComponent } from './Visualizador/datos/datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnPrimarioComponent, BtnSecundarioComponent, BtnAceptarComponent, BtnCancelarComponent, DatosComponent, BtnOscuroComponent, PasswordComponent, EmailComponent, TextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
