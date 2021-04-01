import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: "crud",
    component: CrudComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
