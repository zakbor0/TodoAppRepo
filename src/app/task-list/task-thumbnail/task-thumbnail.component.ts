import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../models/task';

@Component({
  selector: 'task-thumbnail',
  templateUrl: './task-thumbnail.component.html',
  styleUrls: ['./task-thumbnail.component.css']
})
export class TaskThumbnailComponent implements OnInit {

  @Input() task:ITask

  constructor() { }

  ngOnInit() {
  }

}
