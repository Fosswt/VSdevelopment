import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  dados: any;
  title = 'app';
  results = '';
  constructor(private http: HttpClient){
  }
  
  sendGetRequest(){
    this.http.get('http://localhost:57400/api/plant').subscribe((res =>{
      console.log(res)
      this.dados = res
    }))
  }

  ngOnInit(): void {
    this.sendGetRequest()
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  
}
