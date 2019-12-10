// Service to talk to your lambda function or backend
import { SurveyForm } from './survey-form.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  formData: SurveyForm;
  readonly rootURL = 'https://cnbv18h9t8.execute-api.us-east-1.amazonaws.com/dev';
  list : SurveyForm[];

  constructor(private http: HttpClient) { }

  postSurveyForm() {
    return this.http.post(this.rootURL + '/survey', this.formData, httpOptions);
  }
  putSurveyForm() {
    return this.http.put(this.rootURL + '/SurveyForm/'+ this.formData.SurveyId, this.formData);
  }
  deleteSurveyForm(id) {
    return this.http.delete(this.rootURL + '/SurveyForm/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/surveys')
    .toPromise()
    .then((res: any) => this.list = res.surveys as SurveyForm[]);
  }
}
