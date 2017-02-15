import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UrgentComponent } from './components/tasks/urgent/urgent/urgent.component';
import { LongTermComponent } from './components/tasks/long-term/long-term.component';
import { DoneComponent } from './components/tasks/done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    UrgentComponent,
    LongTermComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
