import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  link: string;

  constructor(){
    this.link = "https://falls-market.com"
  }
}
