import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Lista de tarefas",
      icon: "task_alt",
      routeUrl: "/task",
    };
  }

  ngOnInit(): void {
  }

  navigateToTaskCreate(): void {
    this.router.navigate(['task/create']);
  }
}
