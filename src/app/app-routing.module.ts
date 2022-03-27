import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'task',
    component: TaskCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
