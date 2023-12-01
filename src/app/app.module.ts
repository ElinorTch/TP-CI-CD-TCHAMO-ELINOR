import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarRatingModule } from "ngx-bar-rating"
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';


import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PaysComponent } from './components/accueil/pays/pays.component';
import { RegionsComponent } from './components/accueil/regions/regions.component';
import { SousRegionsComponent } from './components/accueil/sous-regions/sous-regions.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AProposComponent } from './components/a-propos/a-propos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PaysComponent,
    RegionsComponent,
    SousRegionsComponent,
    HeaderComponent,
    FooterComponent,
    StatisticComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxChartsModule,
    BarRatingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
