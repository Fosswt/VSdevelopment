import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'butao',
  templateUrl: './butao.component.html',
  styleUrls: ['./butao.component.css']
})
export class ButaoComponent {

  @Input()
  titulo: string = "Um botão"

  @Output()
  pressionado = new EventEmitter<string>();
  
  onClick() : void{
    this.pressionado.emit("Ok")
  }
}
