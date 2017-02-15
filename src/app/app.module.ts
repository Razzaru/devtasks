import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UrgentComponent } from './components/tasks/urgent/urgent.component';
import { LongTermComponent } from './components/tasks/long-term/long-term.component';
import { DoneComponent } from './components/tasks/done/done.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import {routing} from "./app.routing";
import { TaskDetailsComponent } from './components/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UrgentComponent,
    LongTermComponent,
    DoneComponent,
    NavbarComponent,
    HomeComponent,
    StatisticsComponent,
    ContactComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
