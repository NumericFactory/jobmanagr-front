import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/modules/material/material.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ContextmenuComponent } from './shared/components/contextmenu/contextmenu.component';

import { SkillGateway } from './core/ports/skills.gateway';
import { SkillService } from './core/adapters/skill.service';
import { JobGateway } from './core/ports/jobs.gateway';
import { JobService } from './core/adapters/job.service';
import { TalentService } from './core/adapters/talent.service';
import { TalentGateway } from './core/ports/talents.gateway';
import { CustomerGateway } from './core/ports/customers.gateway';
import { CustomerService } from './core/adapters/customer.service';

@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    ContextmenuComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule

  ],
  exports: [],
  providers: [
    { provide: JobGateway, useClass: JobService },
    { provide: TalentGateway, useClass: TalentService },
    { provide: SkillGateway, useClass: SkillService },
    { provide: CustomerGateway, useClass: CustomerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
