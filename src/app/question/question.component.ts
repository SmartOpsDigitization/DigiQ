import { Component, OnInit } from '@angular/core';
import {getaccountname} from '../smm-datastructure'
import { SmmService } from '../smm.service'
import swal from 'sweetalert2';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public allaccount =['AT&TDOX','AT&NT Non-Dox'];
  constructor(public _smmservice : SmmService) { }
  popup:boolean=false;
  accountname:string;
  header: string = "Accounts";
  getaccount:getaccountname[];
  aolname:string;
  accountobject = new getaccountname();
  updatedaccountname:string;
  updatedaolname:string;
  updatedaccountid:number;
  popupupdate:boolean=false;
  accountobj = new getaccountname();
  selectedteam: number;
  public confirmdelete:boolean=false;
  ngOnInit() {
    this._smmservice.getallaccountname().subscribe(data => this.getaccount = data)    
  }
  openpopup(){
    this.popup=true;
  } 
  closepopup(){
    this.popup=false;
    this.popupupdate=false;
  }
  onsubmit(){
    this.allaccount.push(this.accountname);
    this.popup=false;
    this.accountobject.accountName=this.accountname;
    this.accountobject.accountId=10;
    this.accountobject.aolName=this.aolname;
    this._smmservice.addaccount(this.accountobject);
    // this.accountname = "";
    // this.aolname = "";
    swal('Update Successfully').then(function() {location.reload()});
  }
  onselect(processid: number) {
    swal('Process Id - ' + processid);
    this.selectedteam = processid;
    this.confirmdelete=true;    
  }
  onselectmodify(accountid,accountname,aolname){
    this.updatedaccountid=accountid;
    this.updatedaccountname=accountname;
    this.updatedaolname=aolname;
    this.popupupdate=true;
  }
  onupdate(){
    this.accountobj.accountId=this.updatedaccountid;
    this.accountobj.accountName=this.updatedaccountname;
    this.accountobj.aolName=this.updatedaolname
    this._smmservice.updateaccount(this.accountobj);
    this.popupupdate=false;
    swal('Update Successfully').then(function() {location.reload()});    
  }
  Deleteemployee(){
    this._smmservice.deleteaccount(this.selectedteam)
    this.ngOnInit();
    this.confirmdelete=false;
    swal("Deleted Successfully").then(function() {location.reload()}); 
    // location.reload();
  }
  onselectdelete(accountid: number) {
    this.selectedteam = accountid;
    swal({
      title: "Are you sure?",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {

        if (willDelete.value) {
          this.Deleteemployee();
          // swal("Deleted Successfully");
          // location.reload();
        // } else {
          // swal("Action Cancelled");
        }
      });
  }
}