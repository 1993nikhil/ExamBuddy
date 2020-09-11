import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpAppGateway } from './app-gateway/http-app-gateway';
import { AppGateway } from './app-gateway/app-gateway';

@NgModule({
  declarations: [
    AppComponent,
    BookSessionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: AppGateway, useClass: HttpAppGateway}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
