import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes/routes';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListService } from './services/task-list.service';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskThumbnailComponent } from './task-list/task-thumbnail/task-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    TaskListComponent,
    TaskThumbnailComponent,
    TaskEditComponent
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
