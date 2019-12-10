// Component for submit form
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SurveyFormService } from './../../shared/survey-form.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styles: []
})
export class SurveyFormComponent implements OnInit {

  constructor(private service: SurveyFormService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
  if (form != null)
    form.form.reset();
  this.service.formData = {
    SurveyId: 0,
    FirstName: '',
    LastName: '',
    Street: '',
    City: '',
    State: '',
    Zip: '',
    MobileNumber: '',
    Email: '',
    SurveyDate: '',
    Recomendation: '',
    Radio: '',
    LikeStudent: false,
    LikeLocation: false,
    LikeCampus: false,
    LikeAtmosphere: false,
    LikeDormRooms: false,
    LikeSports: false
  }
}

onSubmit(form: NgForm) {
  if (this.service.formData.SurveyId == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}

insertRecord(form: NgForm) {
    this.service.postSurveyForm().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Survey Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putSurveyForm().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Survey Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
