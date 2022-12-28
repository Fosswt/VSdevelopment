import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { TableComponent } from './components/table/table.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
