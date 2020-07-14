import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { BackgroundComponent } from './Components/background/background.component';
import { PharmacyComponent } from './Components/pharmacy/pharmacy.component';
import { HoursComponent } from './Components/hours/hours.component';
import { WalkInClinicComponent } from './Components/walk-in-clinic/walk-in-clinic.component';
import { MedicalClinicComponent } from './Components/medical-clinic/medical-clinic.component';
import { TopArticleComponent } from './Components/top-article/top-article.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ServiceListDiscriptionComponent } from './Components/service-list-discription/service-list-discription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BackgroundComponent,
    PharmacyComponent,
    HoursComponent,
    WalkInClinicComponent,
    MedicalClinicComponent,
    TopArticleComponent,
    NavbarComponent,
    ServiceListDiscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
