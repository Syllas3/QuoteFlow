import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RegisterPageComponent } from './components/register_page/register-page.component';
import { LoginPageComponent } from './components/login_page/login-page.component';
import { ForgotPasswordPageComponent } from './components/forgot_password_page/forgot-password-page.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent }, // Home
  { path: 'login', component: LoginPageComponent }, // Página de login
  { path: 'register', component: RegisterPageComponent }, // Página de registro
  { path: 'forgot_password', component: ForgotPasswordPageComponent }, // Página de recuperar senha
  { path: 'dashboard', component: DashboardComponent }, // Página de dashboard
  { path: 'dashboard/profile', component: ProfileComponent }, // Página de perfil

  // Outras rotas
];
