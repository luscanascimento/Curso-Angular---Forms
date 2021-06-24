import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { NgxViacepModule, NgxViacepService } from '@brunoc/ngx-viacep';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TemplateFormComponent],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxViacepModule,
    SharedModule,
  ],
})
export class TemplateFormModule {}
