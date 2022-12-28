import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './meu-primeiro/hello-world/hello-world.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
