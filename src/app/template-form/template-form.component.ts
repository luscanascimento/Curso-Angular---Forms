import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };
  ngOnInit(): void {}
  onSubmit(formulario: any) {
    console.log(formulario);
    console.log(this.usuario);
  }
  constructor() {}
}
