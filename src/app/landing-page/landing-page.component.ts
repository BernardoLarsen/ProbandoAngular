import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  ngOnInit(): void {

      this.peliculasEnCines = [{
        nombre: "Rapido Y Furioso 9",
        fechaDeLanzamiento: new Date(),
        precio : 1450,
        poster: 'https://mx.web.img3.acsta.net/pictures/20/01/30/19/25/2262982.jpg'
      },
     {
        nombre: "Moana",
        fechaDeLanzamiento: "2010-11-25",
        precio : 1300,
        poster: 'https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg'
      }]
  }
      peliculasEnCines = [];
      peliculasProximosEstrenos = [];

}
