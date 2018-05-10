import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { SelectRatingComponent } from './components/show-average/select-rating/select-rating.component';
import { ShowAverageComponent } from './components/show-average/show-average.component';
import { MarketplaceService } from './services/marketplace/marketplace.service';


@NgModule({
  declarations: [
    AppComponent,
    SelectRatingComponent,
    ShowAverageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    MarketplaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
