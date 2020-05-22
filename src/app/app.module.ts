import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { JouerComponent } from './jouer/jouer.component';
import { PartiesComponent } from './parties/parties.component';
import { ReglesComponent } from './regles/regles.component';
import { HomeComponent } from './home/home.component';
import { TimeBombComponent } from './time-bomb/time-bomb.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'jouer', component: JouerComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'regles', component: ReglesComponent },
  { path: 'time-bomb', component: TimeBombComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    JouerComponent,
    PartiesComponent,
    ReglesComponent,
    TimeBombComponent,
    InscriptionComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
