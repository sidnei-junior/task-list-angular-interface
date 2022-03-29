import { Component, OnInit } from '@angular/core';
import { FilterPanelService } from 'src/app/components/filter-panel/filter-panel.service';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {

  tasks: Task[];
  displayedColumns = ['id', 'title', 'priority', 'action']

  constructor(private taskService: TaskService,
    private filterPanelService: FilterPanelService) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      console.log('tasks: ', tasks);
      console.log("this.status: ", this.status)
      if (this.status === 'all') {
        this.tasks = tasks
      } else if (this.status === 'doing') {
        this.tasks = tasks.filter(task => !task.solved);
      } else {
        this.tasks = tasks.filter(task => task.solved);
      }
    })
  }

  translatePriority (priority: string) : string {
    if (priority === 'low') return 'Baixa';
    if (priority === 'high') return 'Alta';
    return 'Média';
  } 

  get status(): string {
    return this.filterPanelService.filterPanelData.status;
  }

}
