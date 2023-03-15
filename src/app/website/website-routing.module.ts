import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//--> Pages
import { HomeComponent } from './pages/home/home.component'
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LayoutComponent} from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'characters',
        component: CharactersComponent
      },
      {
        path:'episodes',
        component: EpisodesComponent
      },
      {
        path:'locations',
        component: LocationsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
