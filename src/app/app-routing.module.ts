import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSessionComponent } from './book-session/book-session.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'bookSession', component: BookSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
