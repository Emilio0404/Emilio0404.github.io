import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExpercienceComponent } from './work-expercience/work-expercience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExtracurricularActiviesComponent } from './extracurricular-activies/extracurricular-activies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExpercienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ExtracurricularActiviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
