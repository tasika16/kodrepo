import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeRateComponent } from './components/change-rate/change-rate.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { NewChangeRateDialogComponent } from './components/new-change-rate-dialog/new-change-rate-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeRateComponent,
    NewChangeRateDialogComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
