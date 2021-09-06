import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';

import { CreateFeedComponent } from './Components/Feed/create-feed/create-feed.component';
import { FeedFilterComponent } from './Components/Feed/feed-filter/feed-filter.component';
import { FeedListComponent } from './Components/Feed/feed-list/feed-list.component';
import { UpdateFeedComponent } from './Components/Feed/update-feed/update-feed.component';

import { CreateResponseComponent } from './Components/Response/create-response/create-response/create-response.component';
import { ResponseListComponent } from './Components/Response/response-list/response-list.component';
import { UpdateResponseComponent } from './Components/Response/update-response/update-response/update-response.component';


import { CheckLoginComponent } from './Components/User/check-login/check-login.component';
import { CreateUserComponent } from './Components/User/create-user/create-user.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { UserDetailsComponent } from './Components/User/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    
    CreateDeveloperComponent,
    DeveloperDetailsComponent,
    DeveloperListComponent,
    UpdateDeveloperComponent,

    CreateFeedComponent,
    FeedFilterComponent,
    FeedListComponent,
    UpdateFeedComponent,

    CreateResponseComponent,
    ResponseListComponent,
    UpdateResponseComponent,
    
    CheckLoginComponent,
    CreateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
