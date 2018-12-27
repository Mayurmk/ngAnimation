import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'home'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aboutus', component: AboutUsComponent, data: { animation: 'aboutus'} },
  { path: 'contactus', component: ContactUsComponent, data: { animation: 'contactus'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
