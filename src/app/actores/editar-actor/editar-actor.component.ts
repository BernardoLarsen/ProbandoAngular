import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{

  constructor(private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params =>{
      //alert(params.id);
    })
  }
}
