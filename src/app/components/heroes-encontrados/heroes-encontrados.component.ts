import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes-encontrados',
  templateUrl: './heroes-encontrados.component.html'
})
export class HeroesEncontradosComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }

}
