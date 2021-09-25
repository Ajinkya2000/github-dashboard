import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsComponent } from './components/icons/icons.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { LanguageTagComponent } from './components/repo-detail/language-tag/language-tag.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [AppComponent, routingComponents, IconsComponent, RepoDetailComponent, LanguageTagComponent, SkeletonComponent],
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
