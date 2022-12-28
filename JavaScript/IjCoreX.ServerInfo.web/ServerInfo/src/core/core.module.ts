import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IjCoreXComponent } from './components/ij-core-x/ij-core-x.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { NavBarButtonsComponent } from './components/nav-bar-buttons/nav-bar-buttons.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';
import { NewbuttnComponent } from './components/newbuttn/newbuttn.component';
import { CreatePlantComponent } from './components/create-plant/create-plant.component';



@NgModule({
  declarations: [
    NavBarComponent,
    IjCoreXComponent,
    AppLogoComponent,
    NavBarButtonsComponent,
    SideBarComponent,
    FooterComponent,
    TableComponent,
    NewbuttnComponent,
    CreatePlantComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    IjCoreXComponent,
    TableComponent,
    NewbuttnComponent,
    
  ]
})
export class CoreModule { }
