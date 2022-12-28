import { Component } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  joinha(){
    alert("BRO WTF??")
  }
  editar(){
    alert("entao vc quer editar mesmo amigao? kk que isso")
  }
}
