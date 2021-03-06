import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { MessageComponent } from './message/message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PointsTableModule } from './pointsTable/points-table.module';
import { MatchesModule } from './matches/matches.module';
import { TeamPlayersModule } from './teamPlayers/team-players.module';
import { VenuesModule } from './venues/venues.module';
import { WinnerModule } from './winner/winner.module';
import { SponsersComponent } from './sponsers/sponsers.component';
import { PhotoGallaryComponent } from './photo-gallary/photo-gallary.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PageNotFoundComponent,
    SponsersComponent,
    PhotoGallaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountriesModule,
    PointsTableModule,
    MatchesModule,
    TeamPlayersModule,
    VenuesModule,
    WinnerModule,
    NgImageSliderModule,
    AppRoutingModule
  ],
  providers:[{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
