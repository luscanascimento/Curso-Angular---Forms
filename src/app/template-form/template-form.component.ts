import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(_http: HttpClient) {}
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
    console.log(formulario);
    console.log(this.usuario);
  }
  consultaCEP(cep: string, 
    //form
    ) {
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado
    if (cep != '') {
      //Expressão regular para validar o CEP
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http
          .get('//viacep.com.br/ws/${cep}/json')
          .map((dados: { json: () => any }) => dados.json())
          .subscribe((dados: any) => console.log(dados));
      }
    }
    //populaDadosForm(dados, form){

    }
  }
}
