import { Component, OnInit } from '@angular/core';
import { process1, checkedlist } from '../smm-datastructure'
import { SmmService } from '../smm.service'
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  public allprocesses = ['Batch scheduling', 'Process Scheduling', 'Billing'];
  allprocess: process1;
  deleteprocessobj = new process1();
  header: string = "Processes";
  popup: boolean = false;
  popupupdate: boolean = false;
  processobject = new process1();
  Processid1: number;
  processname1: string;
  processname: string;
  getchecklistarray: checkedlist[];
  public confirmdelete: boolean = false;
  modifyprocessname: string;
  constructor(public _smmservice: SmmService, private router: Router) { }
  ngOnInit() {
    this._smmservice.getallprocess().subscribe(data => this.allprocess = data)
    this._smmservice.getchecklistdata().subscribe(data => this.getchecklistarray = data);
  }
  openpopup() {
    swal({
      title: 'Process Name',
      input: 'text',
      showCancelButton: true,
      inputValidator: (process) => {
        if (!process) {
          return 'You need to enter process!'
        }
      }
    }).then((submitText) => {
      if (submitText.value) {
        this.onsubmit(submitText.value);
      }
    });
  }
  onsubmit(processAdded: string) {
    this.processobject.processName = processAdded;
    this._smmservice.addprocess(this.processobject);
    swal('Process Added Succesfully').then(function () { location.reload() });
  }




  onselectmodify(updateprocessname: string, updateprocessid: number) {
    this.modifyprocessname = updateprocessname;
    this.processobject.processId = updateprocessid;
    swal({
      title: 'Process Name',
      input: 'text',
      inputValue: updateprocessname,
      showCancelButton: true,
      inputValidator: (process) => {
        if (!process) {
          return 'You need to enter Process!'
        }
      }
    }).then((submitText) => {
      if (submitText.value) {
        this.onupdate(submitText.value);
      }
    });
  }



  
  onupdate(modifyprocessname: string) {
    this.processobject.processName = modifyprocessname;
    this._smmservice.updateprocess(this.processobject);
    swal('Process Updated Succesfully').then(function () { location.reload() });
  }
  onselectdelete(Processid: number) {
    this.Processid1 = Processid;
    swal({
      title: "Are you sure?",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {
        if (willDelete.value) {
          this.Deleteemployee();
        }
      });
  }
  Deleteemployee() {
    this._smmservice.deleteprocess(this.Processid1);
    this.confirmdelete = false;
    swal('Process Deleted Succesfully').then(function () { location.reload() });
  }
  viewchecklistdata(pid: number, chkid: number) {
    this.router.navigate(['/checklistdata', pid, chkid]);
  }
}