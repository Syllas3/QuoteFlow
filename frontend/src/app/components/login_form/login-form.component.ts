import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective, NgxMaskPipe, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup; // Formulário gerenciado pelo FormGroup

  constructor(private fb: FormBuilder) {
    // Inicialização do formulário com campos e validações
    this.loginForm = this.fb.group({
      
    })
  }

}
