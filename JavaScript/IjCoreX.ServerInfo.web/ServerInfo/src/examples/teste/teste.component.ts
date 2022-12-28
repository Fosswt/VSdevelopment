import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <strong>Compoent template</strong>
  `,
  styleUrls: []
})
export class TesteComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log("App-teste iniciei")
  }
  ngOnDestroy(): void {
    console.log("Faleci")
  }

}
