import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import RouterModule
import { RouterModule } from '@angular/router';

// import NavbarComponent
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HttpModule } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import { UsersparentComponent } from './usersparent/usersparent.component';
import { UserComponent } from './user/user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // here we add all the Comoponents that are related to this module
    AppComponent,
    NavbarComponent,
    UsersComponent,
    MainComponent,
    NotfoundComponent,
    PostsComponent,
    UsersparentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent}, // main route/component
      { path: 'main', component: MainComponent},
      { path: 'users', component: UsersparentComponent}, // users route/component
      { path: 'users/:id', component: UserComponent}, // users route/component
      { path: '**', component: NotfoundComponent}, // not existent route
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
