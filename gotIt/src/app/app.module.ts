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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BackgroundComponent,
    PharmacyComponent,
    HoursComponent,
    WalkInClinicComponent
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
