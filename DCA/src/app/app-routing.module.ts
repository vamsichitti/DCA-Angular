import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
//import { CreateUserComponent } from './Components/User/create-user/create-user.component';
import { GetUsersComponent } from './Components/User/get-users/get-users.component';


const routes: Routes = [

  {path: 'check-login', component:CheckLoginComponent},
  {path: 'get-users', component:GetUsersComponent},
  //{path: 'create-user', component:CreateUserComponent},
  
  {path: 'dev-list', component:DeveloperListComponent},
  {path: 'addNew', component:CreateDeveloperComponent},
  {path: 'devDetails', component:DeveloperDetailsComponent},
  {path: 'update/:devid', component:UpdateDeveloperComponent},

  {path: 'feed-list',component:FeedListComponent},
  {path: 'create-feed',component:CreateFeedComponent},
  {path: 'feed-filter',component:FeedFilterComponent},
  {path: 'update-feed',component:UpdateFeedComponent},
  
  {path:'createResponse',component:CreateResponseComponent},
  {path:'response-list/:feedid',component:ResponseListComponent},
  {path:'update-Response',component:UpdateResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
