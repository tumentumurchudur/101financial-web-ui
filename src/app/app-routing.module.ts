import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowchartComponent } from './components/flowchart/flowchart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlowchartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
