import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentPageComponent } from './talent-page/talent-page.component';

const routes: Routes = [
  { path: '', component: TalentPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule { }
