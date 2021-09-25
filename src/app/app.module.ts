import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
