import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPageComponent } from './job-page/job-page.component';

const routes: Routes = [
    { path: '', component: JobPageComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobRoutingModule { }