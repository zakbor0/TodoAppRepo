import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { TodosComponent } from '../todos/todos.component';



export const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'todos', component: TodosComponent},
  { path: '', redirectTo: '/todos', pathMatch: 'full' },

  // { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  // { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  // { path: 'events/session/new', component: CreateSessionComponent },
  // { path: '404', component: Error404Component },
  // { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];