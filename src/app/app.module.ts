import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MarketplaceService } from './services/marketplace/marketplace.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MockComponentComponent } from './components/mock-component/mock-component.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { SelectRatingComponent } from './components/calculations/select-rating/select-rating.component';
import { ShowResultsComponent } from './components/calculations/show-results/show-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculationsComponent,
    SelectRatingComponent,
    ShowResultsComponent,
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
