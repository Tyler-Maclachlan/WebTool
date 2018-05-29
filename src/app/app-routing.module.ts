import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { PhpComponent } from './php/php.component';
import { AngularComponent } from './angular/angular.component';
import { ProfileComponent } from './profile/profile.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'php', component: PhpComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
