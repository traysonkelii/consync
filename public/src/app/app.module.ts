import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { HeaderModule } from './modules/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { rootReducer } from './state/app.reducer';
import { RootEffects } from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BarChartComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    HttpClientModule,
    StoreModule.forRoot({'root': rootReducer}, {}),
    StoreDevtoolsModule.instrument({
      name: 'Consync',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([RootEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
