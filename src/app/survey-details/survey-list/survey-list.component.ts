// survey list component which rakes the data for listing the survey
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SurveyFormService } from './../../shared/survey-form.service';
import { SurveyForm } from './../../shared/survey-form.model';

@Component({
  selector: 'app-survey-list',
  templateUrl:'./survey-list.component.html',
  styles: []
})
export class SurveyListComponent implements OnInit {

  constructor(private service: SurveyFormService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: SurveyForm) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(SurveyId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteSurveyForm(SurveyId)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Survey Detail Register');
        },
          err => {
            console.log(err);
          })
    }
  }

}
