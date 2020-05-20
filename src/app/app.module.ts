import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReglesComponent } from './regles/regles.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { JouerComponent } from './jouer/jouer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'regles', component: ReglesComponent },
  { path: 'jouer', component: JouerComponent },
  { path: 'connexion', component: ConnexionComponent },
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
