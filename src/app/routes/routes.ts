import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';



export const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'tasks', component: TaskListComponent},
  { path: 'tasks/:id', component: TaskEditComponent},
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },

  // { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  // { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  // { path: 'events/session/new', component: CreateSessionComponent },
  // { path: '404', component: Error404Component },
  // { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];