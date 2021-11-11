import { Component } from '@angular/core';
import { MemesService } from './services/memes.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'memesChucknorris';
  response: any = [];

  constructor(public service: MemesService){
    this.listarCategoria()

  }

  listarCategoria(){
    this.service.buscarCategorias().pipe(
      tap(response => this.response = response),
    ).subscribe( () => {
      this.response
    })
  }
}
