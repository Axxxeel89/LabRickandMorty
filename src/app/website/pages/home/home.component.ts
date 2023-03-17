import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/Models/ICharacter';
import { ContentService } from '../../../services/content.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: ICharacter[] = []
  // CantidadCharacters: string[] = ['1','2','3','4','5','6','7','8','9','10','11']
  CantidadCharacters: string[] = ['1','2','10']

  constructor(
    private contentService:ContentService
  ){}

  ngOnInit(): void {
    this.contentService.getCharacters(this.CantidadCharacters)
    .subscribe(data => {
      this.characters = data;
      console.log(data)
    })
  }

}
