import { Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register_page/register-page.component';
import { LoginPageComponent } from './components/login_page/login-page.component';
import { ForgotPasswordPageComponent } from './components/forgot_password_page/forgot-password-page.component';
import { DashboardQuotationComponent } from './components/dashboard-quotation/dashboard-quotation.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent }, // Home
  { path: 'login', component: LoginPageComponent }, // Página de login
  { path: 'register', component: RegisterPageComponent }, // Página de registro
  { path: 'forgot_password', component: ForgotPasswordPageComponent }, // Página de recuperar senha
  { path: 'dashboard/quotation', component: DashboardQuotationComponent }, // Página de perfil

  // Outras rotas
];
