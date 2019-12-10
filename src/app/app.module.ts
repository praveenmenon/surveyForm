// The main application moule containing all import functions and component files

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-details/survey-form/survey-form.component';
import { SurveyFormService } from './shared/survey-form.service';
import { SurveyListComponent } from './survey-details/survey-list/survey-list.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    SurveyListComponent,
    SurveyDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    ToastrModule.forRoot()
  ],
  providers: [SurveyFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
