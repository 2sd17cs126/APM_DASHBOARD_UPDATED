import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceComponent } from './performance/performance.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutomationComponent } from './automation/automation.component';
@NgModule({
  declarations: [
    AppComponent,
    PerformanceComponent,
    AutomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
