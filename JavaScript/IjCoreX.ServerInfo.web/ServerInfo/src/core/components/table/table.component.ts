import { Component } from '@angular/core';
import { config } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  joinha(){
    alert("EASTER EGGS BRO WTF????????")
  }
  editar(Id: number){
    alert("entao vc quer editar a planta "+Id+" mesmo amigao? kk que isso")
  }
  //preciso ter os DADOS AQUI!!! sla como vou fazer isso mas preciso
  constructor(private http: HttpClient){
  }
  
  dados: any;
  title = 'app';
  results = '';
  sendGetRequest(){
    this.http.get('http://localhost:57400/api/plant').subscribe((res =>{
      console.log(res)
      this.dados = res
      console.log(this.dados[0]['Id'])
    }))
    
  }
}
