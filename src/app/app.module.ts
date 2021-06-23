import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserConnectionsComponent } from './user-connections/user-connections.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersUploadComponent } from './users-upload/users-upload.component';
import { ConnectionsUploadComponent } from './connections-upload/connections-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserConnectionsComponent,
    NavBarComponent,
    UsersUploadComponent,
    ConnectionsUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
