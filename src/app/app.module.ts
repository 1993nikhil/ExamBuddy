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
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {  MatListModule} from '@angular/material/list';
import{ MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule,MediaChange,MediaObserver } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import{MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BookSessionComponent,
    DashboardComponent
  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    LayoutModule
  ],
  providers: [
    {provide: AppGateway, useClass: HttpAppGateway}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
