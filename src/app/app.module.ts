import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicTemplateFormComponent } from './components/basic-template-form/basic-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    BasicTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
