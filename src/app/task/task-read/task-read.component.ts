import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {

  tasks: Task[];
  tasksReadOnly: Task[];
  displayedColumns = ['id', 'title', 'priority', 'action'];
  idFilter: number;
  titleFilter = '';
  status = 'doing';
  statusFilterFunction: any = {
    'all': () => true,
    'doing': (task: Task) => !task.solved,
    'done': (task: Task) => task.solved
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      this.tasks = tasks.filter(this.statusFilterFunction[this.status]);
      this.tasksReadOnly = tasks;
    })
  }

  translatePriority (priority: string) : string {
    if (priority === 'low') return 'Baixa';
    if (priority === 'high') return 'Alta';
    return 'Média';
  } 

  filterTableId(newIdByFilter: number): void {
    console.log(newIdByFilter)
    this.idFilter = newIdByFilter;
    this.filterTable();
  }

  filterTableTitle(newTitleByFilter: string): void {
    this.titleFilter = newTitleByFilter;
    this.filterTable();
  }

  filterTableStatus(newStatusByFilter: string): void {
    this.status = newStatusByFilter;
    this.filterTable();
  }

  filterTable() {
    this.tasks = this.tasksReadOnly
      .filter(this.statusFilterFunction[this.status])
      .filter(task => task.title.toLowerCase().indexOf(this.titleFilter.toLowerCase())+1)
      .filter(task => (task.id == this.idFilter) || !this.idFilter);
  }

}
