import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado: string = "";

  borrarHeroe(): void{
    console.log("borrando");

    this.heroeBorrado = this.heroes.shift() || '';
  
  }
}
