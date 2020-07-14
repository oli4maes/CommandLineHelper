import { Injectable } from '@angular/core';
import { CommandDetail } from './command-detail.model';
import { HttpClient } from '@angular/common/http';
import { _ParseAST } from '@angular/compiler';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommandDetailService {
  formData :CommandDetail;
  readonly rootURL :string = "https://localhost:5001/api";
  list :CommandDetail[];

  constructor(private http: HttpClient) { }

  postCommandDetail() {
    return this.http.post(`${this.rootURL}/commands/`, this.formData);
  }

  putCommandDetail() {
    return this.http.put(`${this.rootURL}/commands/${this.formData.Id}`, this.formData);
  }

  deleteCommandDetail(id) {
    return this.http.delete(`${this.rootURL}/commands/${id}`);
  }

  refreshList() {
    this.http.get(`${this.rootURL}/commands/`)
    .toPromise()
    .then(res => this.list = res as CommandDetail[]);
  }
}
