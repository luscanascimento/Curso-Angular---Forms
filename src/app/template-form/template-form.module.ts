import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { NgxViacepModule, NgxViacepService } from '@brunoc/ngx-viacep';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    TemplateFormComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxViacepModule,
  ],
})
export class TemplateFormModule {}
