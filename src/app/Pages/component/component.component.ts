import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  @Input()
  titulo_pagina:string = ''

  @Input()
  img_pagina:string = ''

  @Input()
  descricao_pagina:string = ''

  private Id: string | null = '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id = value.get('id')
      )
      this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(Id:string | null){
    const result = dataFake.filter( article => article.id == Id)[0]

    //se encontrar o id que foi feito a pesquisa acima 
    this.titulo_pagina = result.titulo;
    this.descricao_pagina = result.description;
    this.img_pagina = result.foto

  }

  
}
