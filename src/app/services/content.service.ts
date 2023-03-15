import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../Models/ICharacter'


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9"

  constructor(
    private http:HttpClient
  ) { }

  getCharacters(){
    return this.http.get<ICharacter[]>(this.apiUrl)
  }

}
