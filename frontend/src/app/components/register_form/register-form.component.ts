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
  selector: 'app-register-form',
  standalone: true,
  imports: [
    RouterModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialização do formulário com validações
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]], // Campo obrigatório
      email: ['', [Validators.required, Validators.email]], // Campo obrigatório com validação de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo obrigatório com mínimo de 6 caracteres
    });
  }

  // Método chamado no envio do formulário
  onSubmit() {
    if (this.registerForm.valid) {
      // Formulário válido, prossiga com o registro
      console.log('Formulário válido:', this.registerForm.value);
      this.router.navigate(['/dashboard']); // Redireciona para o dashboard
    } else {
      // Exiba mensagens de erro
      this.registerForm.markAllAsTouched(); // Marca todos os campos para mostrar erros se houver
    }
  }
}
