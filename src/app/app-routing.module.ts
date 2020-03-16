import { StudentformComponent } from './studentform/studentform.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path:'',redirectTo:'student',pathMatch:'full'
  // },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: '', component: StudentComponent },
      {
        path: 'studentdetails', component: StudentdetailsComponent
      },
      {
        path: 'studentregistration', component: StudentregistrationComponent
      } 
    ]
  },
  {path:'student/studentform',component: StudentformComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
