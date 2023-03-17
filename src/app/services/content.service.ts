import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../Models/ICharacter'
import { IEpisodes } from '../Models/IEpisodes'


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrlCharacters = "https://rickandmortyapi.com/api/character/";
  private apiUrlEpisodes = "https://rickandmortyapi.com/api/episode/";

  CantidadCharacter: string [] = []
  CantidadEpisodes: string [] = []

  constructor(
    private http:HttpClient,
  ) { }

  getCharacters(CharImagenes: string []){
    this.CantidadCharacter = CharImagenes;
    return this.http.get<ICharacter[]>(this.apiUrlCharacters + '/' + this.CantidadCharacter)
  }

  getEpisodes(EpisoImagenes: string []){
    this.CantidadEpisodes = EpisoImagenes;
    return this.http.get<IEpisodes[]>(this.apiUrlEpisodes + this.CantidadEpisodes);
  }

}
