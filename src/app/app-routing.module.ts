import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'jobs',
    loadChildren: () => import('./views/job/job.module').then(m => m.JobModule)
  },
  {
    path: 'talents',
    loadChildren: () => import('./views/talent/talent.module').then(m => m.TalentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
