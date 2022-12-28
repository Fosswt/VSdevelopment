import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  public checked: boolean = false

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  title = 'ServerInfo';
  alerta(text:string){
    alert(text)
  }
  
}
