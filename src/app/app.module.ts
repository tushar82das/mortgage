/** modules imports*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** components imports*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { MortgageHistoryComponent } from './mortgage-history/mortgage-history.component';

//** services imports */
import { MortgageApiService } from './services/mortgage-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MortgageComponent,
    MortgageHistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'mortgage', component: MortgageComponent },
      { path: 'mortgage-history', component: MortgageHistoryComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [MortgageApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
