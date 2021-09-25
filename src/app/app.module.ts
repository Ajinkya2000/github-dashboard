import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [AppComponent, routingComponents, IconsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
