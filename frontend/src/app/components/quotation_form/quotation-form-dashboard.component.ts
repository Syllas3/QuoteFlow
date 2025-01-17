import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quotation-form-dashboard',
  standalone: true,
  imports: [NgxMaskDirective, NgxMaskPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './quotation-form-dashboard.component.html',
})
export class FormDashboardComponent {
  quotationForm: FormGroup; // Formulário gerenciado pelo FormGroup
  showNotificationAlert: boolean = false; // Inicializa a variável

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    // Add 'toastr' as a dependency
    // Combina a lógica dos dois construtores aqui

    // Inicialização do formulário com campos e validações
    this.quotationForm = this.fb.group({
      category: ['', Validators.required], // Campo obrigatório
      productName: ['', Validators.required], // Campo obrigatório
      quantity: [null, [Validators.required, Validators.min(1)]], // Campo obrigatório com valor mínimo de 1
      observation: [''], // Campo opcional
    });

    // Lógica de notificação
    const notificationQuotationPage = localStorage.getItem(
      'notificationQuotationPage'
    );
    this.showNotificationAlert = !notificationQuotationPage;
  }

  // Método chamado no envio do formulário
  onSubmit() {
    // Verifica se o formulário não é nulo e é válido
    if (this.quotationForm && this.quotationForm.valid) {
      // Dispara o toast com uma barra de progresso
      this.toastr.info('Enviada com sucesso!', 'Sucesso!', {
        positionClass: 'toast-top-right', // Ajuste a posição conforme necessário
        progressBar: true, // Exibe a barra de progresso
        progressAnimation: 'increasing', // Ou 'decreasing', depende do estilo desejado
        timeOut: 5000, // Define a duração da exibição do toast em milissegundos (5 segundos aqui)
      });

      // Acessa os valores do formulário com non-null assertion (!)
      console.log(this.quotationForm.value!);
    }
  }

  // Função de fechar o alerta
  closeButton() {
    this.showNotificationAlert = false;
    localStorage.setItem('notificationQuotationPage', String(true));
  }
}
