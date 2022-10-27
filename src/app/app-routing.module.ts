import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance/performance.component';
import { AutomationComponent } from './automation/automation.component';
const routes: Routes = [
  {path:'performance',component:PerformanceComponent},
  {path:'automation',component:AutomationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatTabsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
