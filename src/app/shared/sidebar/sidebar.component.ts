import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.gifsServie.historial;
  }

  constructor( private gifsServie: GifsService ) { }

  buscar( termino: string ){
    this.gifsServie.buscarGifs( termino );
  }

}
