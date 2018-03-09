import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes/routes';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskListService } from './services/task-list.service';
import { TaskComponent } from './tasks/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
