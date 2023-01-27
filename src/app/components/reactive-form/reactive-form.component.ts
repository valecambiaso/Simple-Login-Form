import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm: FormGroup;
  
  showText = 'Mostrar';
  hideText = 'Ocultar';
  showPassword = false;

  constructor(){
    let controls: any = {
      email: new FormControl('', [Validators.required, Validators.email]), //primero > valor del input predefinido - segundo > validaciones, restricciones para los controles del formulario (no vacio, numerico...)
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      rememberCredentials: new FormControl(false)
    }
    this.loginForm = new FormGroup(controls);
  }

  showOrHidePassword(): void{
    this.showPassword = !this.showPassword;
    (document.getElementById('password') as HTMLInputElement).type = this.showPassword ? 'text' : 'password';
    (document.getElementById('password-btn') as HTMLInputElement).textContent = this.showPassword ? this.hideText : this.showText;
  }
  
  login(): void{
    alert("Se ha accedido a la cuenta");
  }
}

