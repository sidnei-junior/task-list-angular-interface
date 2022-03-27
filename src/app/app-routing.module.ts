import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { HomeComponent } from './views/home/home.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'task',
    component: TaskCrudComponent
  }, {
    path: 'task/create',
    component: TaskCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
