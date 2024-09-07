import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    RouterModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialização do formulário com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo obrigatório com validação de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo obrigatório com mínimo de 6 caracteres
    });
  }

  // Método chamado no envio do formulário
  onSubmit() {
    if (this.loginForm.valid) {
      // Formulário válido, prossiga com o login
      console.log('Formulário válido:', this.loginForm.value);
      this.router.navigate(['/dashboard/notifications']); // Redireciona ao dashboard
    } else {
      // Exiba mensagens de erro
      this.loginForm.markAllAsTouched(); // Marca todos os campos para mostrar erros se houver
    }
  }
}
