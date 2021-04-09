import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BarreMenuComponent } from './components/barre-menu/barre-menu.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { FormationComponent } from './components/formation/formation.component';
import { CampusComponent } from './components/campus/campus.component';
import { CommonModule } from '@angular/common';
import { ChiffreComponent } from './components/chiffre/chiffre.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { EndComponent } from './components/end/end.component';
import { UniversityComponent } from './components/university/university.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    BarreMenuComponent,
    AgendaComponent,
    FormationComponent,
    CampusComponent,
    ChiffreComponent,
    ConclusionComponent,
    EndComponent,
    UniversityComponent,
    PageNotFoundComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule ,
    RouterModule.forRoot([
      {path: 'index', component: PresentationComponent},
      {path: '', component: PresentationComponent},
      {path: 'menu', component: BarreMenuComponent},
      {path: 'agenda', component: AgendaComponent, },
      {path: 'formation', component: FormationComponent},
      {path: 'campus', component: CampusComponent},
      {path: 'university', component: UniversityComponent},
      {path: 'chiffre', component: ChiffreComponent},
      {path: 'conclusion', component: ConclusionComponent},
      {path: 'end', component: EndComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
