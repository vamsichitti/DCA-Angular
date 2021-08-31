import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './Components/Developer/developer/developer.component';
import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';
import { CreateResponseComponent } from './Components/Response/create-response/create-response/create-response.component';
import { GetResponseComponent } from './Components/Response/get-response/get-response/get-response.component';
import { UpdateResponseComponent } from './Components/Response/update-response/update-response/update-response.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    CreateDeveloperComponent,
    DeveloperDetailsComponent,
    DeveloperListComponent,
    UpdateDeveloperComponent,
    CreateResponseComponent,
    GetResponseComponent,
    UpdateResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
