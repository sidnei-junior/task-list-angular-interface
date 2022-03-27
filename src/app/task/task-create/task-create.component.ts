import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: Task = {
    title: '',
    description: '',
    assigned: 0,
    deadline: String(new Date()),
    priority: 'medium'
  }

  priorities = [
    {viewValue: 'Baixa', value: 'low'},
    {viewValue: 'Média', value: 'medium'},
    {viewValue: 'Alta', value: 'high'}
  ]

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createTask(): void {
    let backendFormatTask = JSON.parse(JSON.stringify(this.task));
    backendFormatTask.deadline = new Date(backendFormatTask.deadline).getTime();
    this.taskService.create(backendFormatTask).subscribe(() => {
      this.taskService.showMessage('Tarefa Criada');
      this.router.navigate(['task']);
    })
  }

  cancel(): void {
    this.router.navigate(['task'])
  }
}
