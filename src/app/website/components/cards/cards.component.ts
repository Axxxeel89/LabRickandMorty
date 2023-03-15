import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/Models/ICharacter';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent{

  @Input() cards: ICharacter= {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin:{
      name: '',
      url: ''
    },
    location:{
      name: '',
      url: '',
    },
    image: '',
    url: '',
    created: '',
  }


}
