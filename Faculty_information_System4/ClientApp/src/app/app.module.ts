import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FacultyViewAllComponent } from './Components/faculty-view-all/faculty-view-all.component';
import { FacultyService } from './Services/faculty.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DepartmentService } from './Services/department.service';
import { DepartmentViewAllComponent } from './Components/department-view-all/department-view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FacultyViewAllComponent,
    DepartmentViewAllComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'faculty-view-all', component: FacultyViewAllComponent },
      {path:'department-view-all' , component:DepartmentViewAllComponent}
     
    ])
  ],
  providers: [FacultyService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
