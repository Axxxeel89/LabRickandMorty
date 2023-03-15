import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/Models/ICharacter';
import { ContentService } from '../../../services/content.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: ICharacter[] = []

  constructor(
    private contentService:ContentService
  ){}

  ngOnInit(): void {
    this.contentService.getCharacters()
    .subscribe(data => {
      this.characters = data;
      console.log(data)
    })
  }

}
