import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

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

  updateTask(): void {
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage('Tarefa atualizada com sucesso');
      this.router.navigate(['/task']);
    })
  }

  cancel(): void {
    this.router.navigate(['/task']);
  }

}
