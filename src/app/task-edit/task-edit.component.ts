import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../models/task';
import { TaskListService } from '../services/task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task:ITask;

  constructor(private taskListService: TaskListService, private router:Router)
  { 

  }

  ngOnInit() {
    this.taskListService.getTask(1).subscribe(task => {this.task = task});
  }

  editTask(formValues){
    console.log("save clicked");
    console.log(formValues);
  }
  cancel()
  {
    console.log("cancel clicked");
    this.router.navigate(['tasks']);
  }



}
