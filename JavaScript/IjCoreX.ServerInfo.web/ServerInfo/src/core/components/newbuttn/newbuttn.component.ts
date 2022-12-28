import { Component } from '@angular/core';

@Component({
  selector: 'app-newbuttn',
  templateUrl: './newbuttn.component.html',
  styleUrls: ['./newbuttn.component.css']
})
export class NewbuttnComponent {
  mostrar: boolean = false

  toggle(){
    this.mostrar = !this.mostrar
  }
}
