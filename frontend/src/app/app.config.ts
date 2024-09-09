// Importa os módulos necessários do núcleo do Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Importa a função para fornecer as rotas do Angular Router
import { provideRouter } from '@angular/router';

// Importa as rotas definidas no arquivo 'app.routes.ts'
import { routes } from './app.routes';
// Importa a função que fornece a hidratação do cliente, otimizando o carregamento da página
import { provideClientHydration } from '@angular/platform-browser';
// Importa a função que configura o ngx-mask, uma biblioteca para formatação de inputs (como máscaras de telefone, CPF, etc.)
import { provideEnvironmentNgxMask } from 'ngx-mask';
// Importa o suporte a animações no Angular, necessário para componentes que usam animações
import { provideAnimations } from '@angular/platform-browser/animations';
// Importa a função que fornece o serviço de Toastr, utilizado para exibir notificações/toasts na aplicação
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Define a configuração da aplicação como um objeto do tipo ApplicationConfig
export const appConfig: ApplicationConfig = {
  // O array 'providers' contém todos os serviços que serão fornecidos globalmente na aplicação
  providers: [
    // Configura a detecção de mudanças no Angular para melhorar o desempenho, agrupando eventos de mudança
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Configura o provedor de rotas da aplicação com as rotas definidas no arquivo 'app.routes.ts'
    provideRouter(routes),
    // Fornece o serviço de hidratação do cliente, que melhora a performance inicial da aplicação em certas condições
    provideClientHydration(),
    // Fornece o serviço para configuração do ngx-mask, permitindo o uso de máscaras de input nos formulários
    provideEnvironmentNgxMask(),
    // Fornece suporte a animações, necessário para utilizar animações no Angular (como Material Design, por exemplo)
    provideAnimations(),
    // Fornece o serviço Toastr, que permite exibir notificações na tela
    provideToastr(), provideAnimationsAsync(),
  ],
};
