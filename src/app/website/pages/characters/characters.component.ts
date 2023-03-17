import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/Models/ICharacter'
import {ContentService} from 'src/app/services/content.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: ICharacter[] = []
  CantidadCharacters: string[] = ['1','2','3','4','5','6','7','8','9','10','11', '12']

  constructor(
    private contentService:ContentService
  ){}

  ngOnInit(): void {
    this.contentService.getCharacters(this.CantidadCharacters)
    .subscribe( data => {
      this.characters = data;
    })
  }

}
