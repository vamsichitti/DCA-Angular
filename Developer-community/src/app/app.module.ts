import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './Components/Developer/developer/developer.component';
import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';
import { CreateFeedComponent } from './Components/Feed/create-feed/create-feed/create-feed.component';
import { GetFeedComponent } from './Components/Feed/get-feed/get-feed/get-feed.component';
import { UpdateFeedComponent } from './Components/Feed/update-feed/update-feed/update-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    CreateDeveloperComponent,
    DeveloperDetailsComponent,
    DeveloperListComponent,
    UpdateDeveloperComponent,
    CreateFeedComponent,
    GetFeedComponent,
    UpdateFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
