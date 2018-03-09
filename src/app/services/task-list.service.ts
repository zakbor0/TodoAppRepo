import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TaskListService {

  constructor() { }

  getTasks():Observable<ITask[]>{
    // let to to samo co var tylko ma zasięg blokowy a nie w funkcji
    let obs = new Observable<ITask[]>( observer => {
      // Zwrócenie całej tablicy z opóźnieniem 100ms 
      setTimeout(() => {
        observer.next(this.TASKS);
        // tych nextów może być kilka, gdzi kolejno przychodziłyby taski
        // observer.complete(); - może być też tu, nawet lepiej.
      },1000);      
      setTimeout(() => {
        observer.complete();
      },2000); //musi byś po tym jak już dostanie wszystkie dane
    });
    return obs;
  }

  getTask(id:number){
    return this.TASKS.find(task => task.id === id);
  }


private TASKS:ITask[] = [
      {
        id: 1,
        title: 'Zjeść obiad from service',
        description: 'Ugotować i zjeść',
        startDate: new Date('9/26/2036'),
        endDate: new Date('9/26/2036'),
        status: 'not started'
      },
      {
        id: 2,
        title: 'Zjeść śniadanie',
        description: 'Zrobić i zjeść',
        startDate: new Date('9/26/2031'),
        endDate: new Date('9/26/2031'),
        status: 'not started'
      }

]

}