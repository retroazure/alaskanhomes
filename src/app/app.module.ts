import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertyTypeComponent } from './components/property-type/property-type.component';
import { PriceRangeComponent } from './components/price-range/price-range.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultItemComponent } from './components/result-item/result-item.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    PropertyTypeComponent,
    PriceRangeComponent,
    ResultsComponent,
    ResultItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
