import { Component, OnInit } from '@angular/core';
import { CommandDetailService } from './../../shared/command-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit {

  constructor(public service: CommandDetailService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null) {
      form.form.reset();
    }
    this.service.formData = {
      Id: 0,
      HowTo: '',
      Line: '',
      Platform: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }    
  }

  insertRecord(form: NgForm) {
    this.service.postCommandDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCommandDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
