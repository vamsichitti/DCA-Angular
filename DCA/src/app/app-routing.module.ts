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
import { AdminDevComponent } from './Components/Admin/Dev-Details/admin-dev/admin-dev.component';
import { DevlistComponent } from './Components/Admin/Dev-List/devlist/devlist.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },



  { path: 'check-login', component: CheckLoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'create-user', component: CreateUserComponent },

  { path: 'dev-list', component: DeveloperListComponent, canActivate: [AuthGuard], data: { role: "admin" } },

  { path: 'addNew', component: CreateDeveloperComponent, canActivate: [AuthGuard], data: { role: "user" } },
  { path: 'devDetails', component: DeveloperDetailsComponent, canActivate: [AuthGuard], data: { role: "user" } },
  { path: 'devDetails/:devId', component: DeveloperDetailsComponent, canActivate: [AuthGuard], data: { role: "user" } },

  { path: 'update-dev/:devId', component: UpdateDeveloperComponent, canActivate: [AuthGuard], data: { role: "user" } },

  { path: 'feed-list', component: FeedListComponent },
  { path: 'create-feed', component: CreateFeedComponent, canActivate: [AuthGuard], data: { role: "user" } },
  { path: 'feed-filter/:devId', component: FeedFilterComponent },
  { path: 'update-feed/:feedId', component: UpdateFeedComponent },

  { path: 'createResponse/:feedId/:devId', component: CreateResponseComponent, canActivate: [AuthGuard], data: { role: "user" } },
  { path: 'response-list/:feedId', component: ResponseListComponent, canActivate: [AuthGuard], data: { role: "user" } },
  { path: 'update-Response/:respId', component: UpdateResponseComponent },


  { path: 'logout', component: LogoutComponent },

  { path: 'admin-login', component: LoginAdminComponent },
  { path: 'admin-logout', component: LogoutAdminComponent },
  { path: 'admin-dev/:devId', component: AdminDevComponent },
  { path: 'admin-devlist', component: DevlistComponent, canActivate: [AuthGuard], data: { role: "admin" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
