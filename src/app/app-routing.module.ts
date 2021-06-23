import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsUploadComponent } from './connections-upload/connections-upload.component';
import { UserConnectionsComponent } from './user-connections/user-connections.component';
import { UsersUploadComponent } from './users-upload/users-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-connections', pathMatch:'full' },
  { path: 'user-connections', component: UserConnectionsComponent },
  { path: 'users-upload', component: UsersUploadComponent },
  { path: 'connections-upload', component: ConnectionsUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
