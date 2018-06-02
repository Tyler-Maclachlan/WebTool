import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetService } from './services/snippet.service';

import { bootstrap } from 'bootstrap';
import { jquery } from 'jquery';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { PhpComponent } from './php/php.component';
import { AngularComponent } from './angular/angular.component';
import { ProfileComponent } from './profile/profile.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssComponent,
    PhpComponent,
    AngularComponent,
    ProfileComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule,
    HttpClientModule
  ],
  providers: [
    SnippetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
