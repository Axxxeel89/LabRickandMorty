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
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { ListaComponent } from './components/lista/lista.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    CardsComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    LayoutComponent,
    HeroComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [WebsiteModule]
})
export class WebsiteModule { }
