import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

// #1 declare/create routes
const appRoutes: Routes = [
  // path - this is what gets entered in the url after your domain
  { path: '', component: HomeComponent }, // starting page (localhost:4200)

  // path would look like this localhost:4200/users
  // component - specify what component to load when this path gets reached
  {
    path: 'users',
    component: UsersComponent,
    children: [
      // users/:id - dynamic path
      { path: ':id/:name', component: UserComponent },
    ],
  },

  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuard],
    // define children of ServersComponent - nest them inside of the 'servers' - parent
    children: [
      // load a single server with id of x
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },

  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },

  {
    // make sure this is the last route in your setup,
    // because in another case it'd redirect all requests to /not-found
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  // no need for declarations since those components are already declared in the AppModule

  imports: [RouterModule.forRoot(appRoutes)],
  // #2 import RouterModule.forRoot(ROUTES)
  // forRoot() allows us to register some routes for our main application

  // exports enables an Angular module to expose some of its
  // components/directives/pipes to the other modules in the applications
  // Without it, the components/directives/pipes defined in a module could only be used in that module.
  exports: [RouterModule],
})
export class AppRoutingModule {}
