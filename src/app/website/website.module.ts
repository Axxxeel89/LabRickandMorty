import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
//--> Components
import { NavComponent } from './components/nav/nav.component';
import { CardsComponent } from './components/cards/cards.component';
//--> Pages
import { HomeComponent } from './pages/home/home.component'
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LayoutComponent} from './pages/layout/layout.component';


@NgModule({
  declarations: [
    NavComponent,
    CardsComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
