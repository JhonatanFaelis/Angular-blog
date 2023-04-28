import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  //deixar os items dinamicos 
  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = 'Nova serie da marvel'
  @Input()
  cardDescripition : string ='bla bla bla bla'
  @Input()
  author: string ='Autor'

  @Input()
  Id: string =''



  constructor() { }

  ngOnInit(): void {
  }

}
