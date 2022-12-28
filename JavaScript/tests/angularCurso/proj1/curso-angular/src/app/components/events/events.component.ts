import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  showBoolean: boolean = true

  clickei(){
    this.showBoolean = !this.showBoolean
  }
  clickaAqui(){
    if(this.showBoolean == false){
      alert("My name is BIG VINI")
    }
    else{
      alert("hello, i'm learning Angular and i hope it works better than JS!")
    }
  }
  fu(){
    alert("nao nao é aqui!")
  }
}
