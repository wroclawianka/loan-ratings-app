import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { SelectRatingComponent } from './components/show-average/select-rating/select-rating.component';
import { ShowAverageComponent } from './components/show-average/show-average.component';
import { MarketplaceService } from './services/marketplace/marketplace.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MockComponentComponent } from './components/mock-component/mock-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectRatingComponent,
    ShowAverageComponent,
    HeaderComponent,
    FooterComponent,
    MockComponentComponent
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
