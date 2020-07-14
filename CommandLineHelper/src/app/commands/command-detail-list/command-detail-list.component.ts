import { Component, OnInit } from '@angular/core';
import { CommandDetailService } from './../../shared/command-detail.service';

@Component({
  selector: 'app-command-detail-list',
  templateUrl: './command-detail-list.component.html',
  styleUrls: ['./command-detail-list.component.css']
})
export class CommandDetailListComponent implements OnInit {  

  constructor(public service: CommandDetailService) { }

  ngOnInit() :void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(Id) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deleteCommandDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }

}
