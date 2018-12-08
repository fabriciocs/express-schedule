import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contato = { _id: null, email: '', phone: '', name: ''};
  state = 'LIST';
  contatos = [];
  url = 'http://localhost:3000';

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    this.back();
  }
  list() {
    console.log("Listando");
    this.http.get<any[]>(this.url + '/contacts').subscribe(response => {
      this.contatos = response;
      console.log("listado", response);
    }, error => {
      this.error(error && error.message, 'close')
    });
  }
  salvar() {
    console.log("Salvando", this.contato);
    this.http.post(this.url + '/contacts', this.contato).subscribe(response => {
      console.log("Salvo", response);
      this.back();
      this.snackBar.open('Salvo Com Sucesso', 'close');
    }, error => {
      this.error(error && error.message, 'close')
    });
  }

  editar() {
    console.log("Editando", this.contato);
    this.http.put(this.url + '/contacts', this.contato).subscribe(response => {
      console.log("Editado", response);
      this.back();
      this.snackBar.open('Editado Com Sucesso', 'close');
    }, error => {
      this.error(error && error.message, 'close')
    });
  }

  excluir() {
    console.log("Removendo", this.contato);
    this.http.delete(`${this.url}/contacts/${this.contato._id}`).subscribe(response => {
      console.log("removido", response);
      this.snackBar.open('Excluído Com Sucesso', 'close');
      this.back();
    }, error => {
      this.error(error && error.message, 'close')
    });
  }

  salvarOuAtualizar() {
    if (this.contato._id) {
      this.editar();
    } else {
      this.salvar();
    }
  }
  error(message: string, action: string) {
    this.snackBar.open(message, action);
  }


  back() {
    this.contato = { _id: null, email: '', phone: '', name: ''};
    this.state = 'LIST';
    this.list();
  }
}
