import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WorkoutProgramsComponent } from './workout-programs/workout-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembershipComponent,
    HeaderComponent,
    FooterComponent,
    WorkoutProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
