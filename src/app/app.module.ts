import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectRatingComponent } from './components/select-rating/select-rating.component';
import { ShowAverageComponent } from './components/show-average/show-average.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectRatingComponent,
    ShowAverageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
