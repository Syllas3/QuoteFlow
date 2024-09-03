import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private router: Router) {}

  // login() {
  //   // Aqui você pode adicionar a lógica de autenticação real
  //   // Redireciona para a página de dashboard após o login
  //   this.router.navigate(['/dashboard']);
  // }
}
