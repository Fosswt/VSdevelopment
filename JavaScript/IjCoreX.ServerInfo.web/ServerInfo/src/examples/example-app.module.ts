import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButaoComponent } from './butao/butao.component';
import { AppComponent } from './examplesTest/app.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ButaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class ExampleAppModule { }
