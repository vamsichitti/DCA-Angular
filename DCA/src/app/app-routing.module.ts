import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './Components/Admin/Login/login-admin/login-admin.component';
import { LogoutAdminComponent } from './Components/Admin/Logout/logout-admin/logout-admin.component';
import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';
import { CreateFeedComponent } from './Components/Feed/create-feed/create-feed.component';
import { FeedFilterComponent } from './Components/Feed/feed-filter/feed-filter.component';
import { FeedListComponent } from './Components/Feed/feed-list/feed-list.component';
import { UpdateFeedComponent } from './Components/Feed/update-feed/update-feed.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LogoutComponent } from './Components/Logout/logout/logout.component';
import { CreateResponseComponent } from './Components/Response/create-response/create-response/create-response.component';
import { ResponseListComponent } from './Components/Response/response-list/response-list.component';
import { UpdateResponseComponent } from './Components/Response/update-response/update-response/update-response.component';
import { CheckLoginComponent } from './Components/User/check-login/check-login.component';
import { CreateUserComponent } from './Components/User/create-user/create-user.component';
import { UserDetailsComponent } from './Components/User/user-details/user-details.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { AuthGuard } from 'src/Services/auth-guard.service';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  


  {path: 'check-login', component:CheckLoginComponent},
  {path: 'user-list', component:UserListComponent},
  {path: 'user-details', component:UserDetailsComponent},
  {path: 'create-user', component:CreateUserComponent},
  
  {path: 'dev-list', component:DeveloperListComponent},

  {path: 'addNew', component:CreateDeveloperComponent},
  {path: 'devDetails', component:DeveloperDetailsComponent},
  {path: 'devDetails/:devId', component:DeveloperDetailsComponent},
  {path: 'update-dev/:devId', component:UpdateDeveloperComponent},

  {path: 'feed-list',component:FeedListComponent},
  {path: 'create-feed',component:CreateFeedComponent,canActivate:[AuthGuard],data:{role:"user"}},
  {path: 'feed-filter/:devId',component:FeedFilterComponent},
  {path: 'update-feed/:feedId',component:UpdateFeedComponent},
  
  {path:'createResponse/:feedId/:devId',component:CreateResponseComponent,canActivate:[AuthGuard],data:{role:"user"}},
  {path:'response-list/:feedId',component:ResponseListComponent},
  {path:'update-Response/:respId',component:UpdateResponseComponent},

 
  {path:'logout',component:LogoutComponent},

  {path:'admin-login',component:LoginAdminComponent},
  {path:'admin-logout',component:LogoutAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
