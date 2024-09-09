import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatCardModule} from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css',
})
export class ToastalertComponent {
  constructor(private toastr: ToastrService) {

  }

  showSucess() {
    this.toastr.success("Enviada com sucesso!", "Sucesso!", {})
  }
}
