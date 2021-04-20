import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { AppRoutingModule } from './app-routing.modules';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { GeneralService } from "./services/general.service";
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    ReviewPageComponent,
    NotfoundPageComponent,
    HeaderComponent,
    ThankYouPageComponent,
    AnalyticsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
