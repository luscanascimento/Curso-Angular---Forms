import { BrowserModule } from '@angular/platform-browser';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    TemplateFormComponent,
  ],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
})
export class TemplateFormModule {}
