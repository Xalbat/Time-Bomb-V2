import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReglesComponent } from './regles/regles.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { JouerComponent } from './jouer/jouer.component';
import { PartiesComponent } from './parties/parties.component';
import { HomeComponent } from './home/home.component';
import { CreerPartieComponent } from './creer-partie/creer-partie.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'regles', component: ReglesComponent },
  { path: 'jouer', component: JouerComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'creer-partie', component: CreerPartieComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReglesComponent,
    JouerComponent,
    ConnexionComponent,
    PartiesComponent,
    CreerPartieComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
