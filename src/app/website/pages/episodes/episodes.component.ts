import { Component, OnInit } from '@angular/core';
import { ContentService} from '../../../services/content.service';
import {IEpisodes} from '../../../Models/IEpisodes';
import {ICharacter} from 'src/app/Models/ICharacter';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})

export class EpisodesComponent implements OnInit {

  episodes: IEpisodes[] = []
  someEpisodes : string[] = ['1','2','3','4','5','6','7','8','9','10','11']

  constructor(
    private contentService:ContentService
  ){}

  ngOnInit(): void {
    this.contentService.getEpisodes(this.someEpisodes)
    .subscribe(data => {
      this.episodes = data;
    })
  }


}
