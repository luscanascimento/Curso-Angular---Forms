import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  [x: string]: any;
  usuario: any = {
    nome: null,
    email: null,
  };

  constructor(private http: HttpClient, private cepService: NgxViacepService) {}
  ngOnInit() {}

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }
  onSubmit(formulario: any) {
    //console.log(formulario);
    //console.log(this.usuario);
    this.http
      .post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((dados: any) => {
        console.log(dados);
        formulario.form.reset();
      });
  }
  consultaCEP(cep: string, formulario: any) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map((dados: any) => dados))
          .subscribe((dados: any) => this.populaDadosForm(dados, formulario));
      }
    }
  }
  populaDadosForm(dados: any, formulario: any) {
    formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        estado: dados.uf,
        cidade: dados.localidade,
      },
    });
  }
}
