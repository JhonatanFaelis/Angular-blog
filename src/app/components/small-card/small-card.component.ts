import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

//deixando dinamico 
@Input()
smallCardTittle: string = ''

@Input()
smallCardDescription : string = ""

@Input()
smallCardImg : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
