import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-convem',
  templateUrl: './convem.component.html',
  styleUrls: ['./convem.component.css']
})
export class ConvemComponent {
  resposta: string = '';
  mensagem: string = '';

  constructor(private http: HttpClient) {}

  verificarResposta() {
    const url = 'http://localhost:3000/verificar-resposta';
    const body = { resposta: this.resposta };

    this.http.post(url, body).subscribe(
      (response: any) => {
        if (response === 'Sucesso') {
          this.mensagem = 'Você está mais próximo de se juntar ao time!';
        } else {
          this.mensagem = 'Erro';
        }
      },
      error => {
        this.mensagem = 'Erro';
      }
    );
  }
}
