import { Component, Input } from '@angular/core';
import { IEpisodes } from 'src/app/Models/IEpisodes';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  @Input() Episodes:IEpisodes = {
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [''],
      url: '',
      created: ''
  }


}
