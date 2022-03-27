import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { TaskDeleteComponent } from './task/task-delete/task-delete.component';
import { TaskUpdateComponent } from './task/task-update/task-update.component';
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
  }, {
    path: 'task/update/:id',
    component: TaskUpdateComponent
  }, {
    path: 'task/delete/:id',
    component: TaskDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
