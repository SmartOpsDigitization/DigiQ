import { Component, OnInit } from '@angular/core';
import { SmmService } from '../smm.service';
import {checkedlist,checklistdatapass,process1} from '../smm-datastructure';
import {Router} from '@angular/router';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  constructor(public _smmservice : SmmService,private router: Router) { }
  checklistpopup:boolean=false;
  popup:boolean=false;
  allprocess:process1;
  selectedprocess:number;
  newchecklistname:string;
  checklistobj = new checkedlist();
  confirmdelete:boolean=false;
  getchecklistarray:checkedlist[];
  popupupdate:boolean=false;
  idfordelete:number;
  updatechecklistname:string;
  updatechecklistprocessid:number;
  updatechecklistid:number;
  checklistdesc:string;
  processidvalue:number;
  allchecklist=["Checklist1","Checklist2","Checklist3","Checklist4"];
  ngOnInit() {
    this._smmservice.getchecklistdata().subscribe(data => this.getchecklistarray = data);
    this._smmservice.getallprocess().subscribe(data => this.allprocess = data)
  }
  openpopup(){
    this.popup=true;
  }
  viewchecklistdata(pid:number,chkid:number){
    this.router.navigate(['/checklistdata',pid,chkid]);
  }
  onselectmodify(checklist_id,checklist_name,process_id){
    this.updatechecklistname=checklist_name;
    this.updatechecklistprocessid=process_id;
    this.updatechecklistid=checklist_id;
    this.popupupdate=true;
  }
  closepopup(){
    this.popup=false;
    this.checklistpopup=false;
    this.confirmdelete=false;
    this.popupupdate=false;
  }
  openchecklistpopup(){
    this.checklistpopup=true;
  }
  onsubmit(){
    this.checklistobj.checklistName=this.newchecklistname;
    this.checklistobj.processId=this.processidvalue;
    this._smmservice.savechecklist(this.checklistobj);
    location.reload();
    alert("Checklist Added Succesfully")
  }
  onselectdelte(idm:number){
    alert(idm);
    this.idfordelete=idm;
    this.confirmdelete=true
  }
  Deletechecklist(){
    this._smmservice.deletechecklist(this.idfordelete);
    location.reload();
    alert("Checklist Deleted Succesfully");
  }
  onupdate(){
    this.checklistobj.checklistId=this.updatechecklistid;
    this.checklistobj.processId=this.updatechecklistprocessid;
    this.checklistobj.checklistName=this.updatechecklistname;
    this._smmservice.updatechecklist(this.checklistobj);
    alert("Checklist updated Succesfully");
    location.reload();
  }
}