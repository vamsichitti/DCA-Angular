import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeveloperComponent } from './Components/Developer/create-developer/create-developer/create-developer.component';
import { DeveloperDetailsComponent } from './Components/Developer/developer-details/developer-details/developer-details.component';
import { DeveloperListComponent } from './Components/Developer/developer-list/developer-list/developer-list.component';
import { UpdateDeveloperComponent } from './Components/Developer/update-developer/update-developer/update-developer.component';

const routes: Routes = [

  {path: 'dev-list', component:DeveloperListComponent},
  {path: 'addNew', component:CreateDeveloperComponent},
  {path: 'devDetails', component:DeveloperDetailsComponent},
  {path: 'update/:devid', component:UpdateDeveloperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
