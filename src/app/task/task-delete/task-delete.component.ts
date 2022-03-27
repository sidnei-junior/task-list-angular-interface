import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  task: Task = {
    title: '',
    description: '',
    assigned: 0,
    deadline: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    priority: 'medium',
    solved: false
  }

  priorities = [
    {viewValue: 'Baixa', value: 'low'},
    {viewValue: 'Média', value: 'medium'},
    {viewValue: 'Alta', value: 'high'}
  ]

  constructor(private taskService: TaskService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`
    this.taskService.readById(id).subscribe(task => {
      this.task = task;
    });
  }

  deleteTask(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`
    this.taskService.delete(id).subscribe(() => {
      this.taskService.showMessage('Tarefa deletada!');
      this.router.navigate(['/task']);
    })
  }

  cancel(): void {
    this.router.navigate(['/task']);
  }

}
