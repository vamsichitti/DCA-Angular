import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';

import { CreateFeedComponent } from './Components/Feed/create-feed/create-feed.component';
import { DeleteFeedComponent } from './Components/Feed/delete-feed/delete-feed.component';
import { FeedDetailsComponent } from './Components/Feed/feed-details/feed-details.component';
import { FeedListComponent } from './Components/Feed/feed-list/feed-list.component';
import { UpdateFeedComponent } from './Components/Feed/update-feed/update-feed.component';

import { CreateResponseComponent } from './Components/Response/create-response/create-response/create-response.component';
import { GetResponseComponent } from './Components/Response/get-response/get-response/get-response.component';
import { UpdateResponseComponent } from './Components/Response/update-response/update-response/update-response.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CreateDeveloperComponent,
    DeveloperDetailsComponent,
    DeveloperListComponent,
    UpdateDeveloperComponent,

    CreateFeedComponent,
    DeleteFeedComponent,
    FeedDetailsComponent,
    FeedListComponent,
    UpdateFeedComponent,

    CreateResponseComponent,
    GetResponseComponent,
    UpdateResponseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
