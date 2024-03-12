import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabelagraczy';

  imie: any;
  nazwisko: any;
  nick: any;
  game: any;

  graczelol = new Array<Graczlol>();
  graczeval = new Array<Graczvalorant>();
  graczecs2 = new Array<Graczcs2>();
Add(){
}


}
