import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


 tasks:ITask[] ;

  constructor(private taskListService: TaskListService) 
  {   
  }

  ngOnInit() {

    this.taskListService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });

  }

}
